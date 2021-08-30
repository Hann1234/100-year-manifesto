const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route for track_video table
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  console.log("in GET track_video table");
  
  const getQueryText = `
    SELECT *
    FROM "track_video"
    WHERE "user_id" = $1;
  `;

  pool
    .query(getQueryText, [req.user.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('GET track_video table failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST route for track_video table
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log("in POST track_video table");
  
  const postQueryText = `
    INSERT INTO "track_video" ("user_id", "title", "last_activity", "complete")
    VALUES ($1, $2, NOW(), false);
  `;

  pool
    .query(postQueryText, [req.user.id, req.body.title])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('POST track_video table failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * DELETE route for track_video table
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log("in DELETE track_video table");
  
  const deleteQueryText = `
    DELETE FROM "track_video"
    WHERE "id" = $1;
  `;

  pool
    .query(deleteQueryText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('DELETE track_video table failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * PUT route for track_video table
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log("in PUT track_video table");
  
  const putQueryText = `
    UPDATE "track_video"
    SET "last_activity" = NOW(), "complete" = $1
    WHERE "id" = $2;
  `;

  pool
    .query(putQueryText, [req.body.complete, req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('PUT track_video table failed: ', err);
      res.sendStatus(500);
    });
});



module.exports = router;