const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route for admin_edit_form table
 */
 router.get('/:page_name', (req, res) => {
  console.log("in GET admin_edit_form table");
  
  // NOT YET 100% SURE IF THE BEST MOVE IS TO (1) POPULATE REDUCER WITH DATA FOR ALL FORM PAGES
  // OR (2) GRAB TEXT FOR EACH PAGE ON PAGE LOAD - I LEAN TOWARDS THE (2)

  // GET DATA FOR ALL FORM PAGES
  // const getQueryText = `
  //   SELECT "page_name", ARRAY_AGG('[' || "id" || ',' || "html_id" || ',' || "form_text" || ']') AS "page_data"
  //   FROM "admin_edit_form"
  //   GROUP BY "page_name";
  // `;
  
  // GET DATA FOR CURRENT PAGE
  const getQueryText = `
    SELECT "user_id", "page_name", "html_id", "form_text"
    FROM "admin_edit_form"
    WHERE "page_name" = $1;
  `;

  pool
    .query(getQueryText, [req.params.page_name])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('GET admin_edit_form table failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST route for admin_edit_form table
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log("in POST admin_edit_form table");
  
  if (req.user.role === "admin") {

    const postQueryText = `
      INSERT INTO "admin_edit_form" ("user_id", "page_name", "html_id", "form_text")
      VALUES ($1, $2, $3, $4);
    `;

    pool
      .query(postQueryText, [req.user.id, req.body.page_name, req.body.html_id, req.body.form_text])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('POST admin_edit_form table failed: ', err);
        res.sendStatus(500);
      });    
  } else {
    console.log('POST admin_edit_form permission denied: ', err);
    res.sendStatus(403);
  }
});

/**
 * DELETE route for admin_edit_form table
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log("in DELETE admin_edit_form table");
  
  if (req.user.role === "admin") {

    const deleteQueryText = `
      DELETE FROM "admin_edit_form"
      WHERE "id" = $1;
    `;

    pool
      .query(deleteQueryText, [req.params.id])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('DELETE admin_edit_form table failed: ', err);
        res.sendStatus(500);
      });  
  } else {
    console.log('DELETE admin_edit_form permission denied: ', err);
    res.sendStatus(403);
  }
});

/**
 * PUT route for admin_edit_form table
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log("in PUT admin_edit_form table");

  if (req.user.role === "admin") {

    const putQueryText = `
      UPDATE "admin_edit_form"
      SET "user_id" = $1, "page_name" = $2, "html_id" = $3, "form_text" = $4
      WHERE "id" = $5;
    `;

    pool
      .query(putQueryText, [req.user.id, req.body.page_name, req.body.html_id, req.body.form_text, req.params.id])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('PUT admin_edit_form table failed: ', err);
        res.sendStatus(500);
      });  
  } else {
    console.log('PUT admin_edit_form permission denied: ', err);
    res.sendStatus(403);
  }
});


module.exports = router;