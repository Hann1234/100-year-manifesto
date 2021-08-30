const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route for admin_edit_form table
 */
 router.get('/:page_id', (req, res) => {
  console.log("in GET admin_edit_form table");
  
  // group by page_id and html_id
  // get the most recent row from each group
  // then grab only the values for the current page_id
  const getQueryText = `
    WITH "page_data" AS (
      SELECT "id", 
            "user_id", 
            "page_id",
            "page_name",
            "html_id",
            "form_text",
            "edit_date",
            ROW_NUMBER() OVER(PARTITION BY "page_id", "html_id"
                                  ORDER BY "edit_date" DESC) AS "rank"
        FROM "admin_edit_form")
    SELECT *
      FROM "page_data"
    WHERE "rank" = 1 AND "page_id" = $1;
  `;

  pool
    .query(getQueryText, [req.params.page_id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('GET admin_edit_form table failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * GET route for admin_edit_form table
 * returns what the page content looked like as a specific date and time
 */
 router.get('/page_on_date/:page_id', rejectUnauthenticated, (req, res) => {
  console.log("in GET admin_edit_form table");
  
  if (req.user.role === "admin") {

    // filter out results that are more recent than req.body.edit_date
    // group by page_id and html_id
    // get the most recent row from each group
    // then grab only the values for the current page_id
    const getQueryText = `
      WITH "page_data" AS (
        SELECT "id", 
              "user_id", 
              "page_id",
              "page_name",
              "html_id",
              "form_text",
              "edit_date",
              ROW_NUMBER() OVER(PARTITION BY "page_id", "html_id"
                                    ORDER BY "edit_date" DESC) AS "rank"
          FROM "admin_edit_form"
          WHERE "edit_date" >  $1)
      SELECT *
        FROM "page_data"
      WHERE "rank" = 1 AND "page_id" = $2;
    `;

    pool
      .query(getQueryText, [req.params.edit_date, req.params.page_id])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((err) => {
        console.log('GET admin_edit_form table failed: ', err);
        res.sendStatus(500);
      });
  } else {
    console.log('POST admin_edit_form permission denied: ', err);
    res.sendStatus(403);
  }
});

/**
 * POST route for admin_edit_form table
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log("in POST admin_edit_form table");
  
  if (req.user.role === "admin") {

    const postQueryText = `
      INSERT INTO "admin_edit_form" ("user_id", "page_id", "page_name", "html_id", "form_text")
      VALUES ($1, $2, $3, $4, $5);
    `;

    pool
      .query(postQueryText, [req.user.id, req.body.page_id, req.body.page_name, req.body.html_id, req.body.form_text])
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

module.exports = router;