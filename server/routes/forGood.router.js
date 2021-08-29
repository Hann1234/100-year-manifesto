const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
    const uId = req.user.id;
    const qText = `
      SELECT * FROM "for_good" 
      WHERE "user_id" = $1;
      `;
  
    pool.query( qText, [uId])
    .then((response) => { res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting forGood", error);
      res.sendStatus(500);
    });
  });

/**
 * POST route template
 */
 outer.post('/', (req, res) => {
    const uId = req.user.id;
    const manifestoText = req.body
    const qText = `
      INSERT INTO "for_good" ("user_id", "manifesto_text")
      VALUES ( $1, $2 );
      `;
  
    pool.query(qText, [uId, manifestoText])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error POSTing forGood', error);
      res.sendStatus(500);
    });
  });

/**
 * DELETE route template
 */
 router.delete('/:id', (req, res) => {
    const id = req.params.id
    const uId = req.user.id
    const qText = `
    DELETE FROM "for_good"
    WHERE "id" = $1 AND "user_id" = $2;
    `;
  
    pool.query( qText, [id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error DELETing forGood', error);
      res.sendStatus(500);
    });
  });

/**
 * PUT route template
 */
 router.put('/:id', (req, res) => {
    const id = req.params.id
    const uId = req.user.id
    const manifestoText = req.body
    const qText = `
      UPDATE "for_good" 
      SET "manifesto_text" = $1
      WHERE "id" = $2 AND "user_id" = $3; 
      `;
    pool.query(qText, [manifestoText, id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error PUTing forGood', error);
      res.sendStatus(500);
    });  
  });



module.exports = router;