const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for guiding_principles
 */
 router.get('/',rejectUnauthenticated, (req, res) => {
    const uId = req.user.id;
    const qText = `
      SELECT * FROM "guiding_principles" 
      WHERE "user_id" = $1
      ORDER BY "id" ASC;
      `;
  
    pool.query( qText, [uId])
    .then((response) => { res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting guidingPrinciples", error);
      res.sendStatus(500);
    });
  });

/**
 * POST route for guiding_principles
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
    const uId = req.user.id;
    const manifestoText = req.body.manifestoText;
    const source = req.body.source;
    const qText = `
    INSERT INTO "guiding_principles" ("user_id", "source", "manifesto_text")
    VALUES ( $1, $2, $3 );
      `;
  
    pool.query(qText, [uId, source, manifestoText])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error POSTing guidingPrinciples', error);
      res.sendStatus(500);
    });
  });

/**
 * DELETE route for guiding_principles
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id
    const uId = req.user.id
    const qText = `
    DELETE FROM "guiding_principles"
    WHERE "id" = $1 AND "user_id" = $2;
    `;
  
    pool.query( qText, [id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error DELETing guidingPrinciples', error);
      res.sendStatus(500);
    });
  });

/**
 * PUT route for guiding_principles
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
    const id = req.params.id
    const uId = req.user.id
    const manifestoText = req.body.manifestoText;
    const source = req.body.source;
    const qText = `
    UPDATE "guiding_principles" 
    SET "source" = $1, 
    "manifesto_text" = $2
    WHERE "id" = $3 AND "user_id" = $4; 
      `;

    pool.query(qText, [source, manifestoText, id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error PUTing guidingPrinciples', error);
      res.sendStatus(500);
    });  
  });



module.exports = router;