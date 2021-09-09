const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route for mission_statement
 */
 router.get('/',rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "mission" 
    WHERE "user_id" = $1
    ORDER BY "id" ASC;
    `;

  pool.query( qText, [uId])
  .then((response) => { res.send(response.rows);
  })
  .catch((error) => {
    console.log("Error GETting missionStatement", error);
    res.sendStatus(500);
  });
});

/**
 * POST route for mission_statement
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText
  const qText = `
    INSERT INTO "mission" ("user_id", "manifesto_text")
    VALUES ( $1, $2 );
    `;

  pool.query(qText, [uId, manifestoText])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error POSTing missionStatement', error);
    res.sendStatus(500);
  });
});

/**
 * DELETE route for mission_statement
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const qText = `
  DELETE FROM "mission"
  WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool.query( qText, [id, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error DELETing missionStatement', error);
    res.sendStatus(500);
  });
});

/**
 * PUT route for mission_statement
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const manifestoText = req.body.manifestoText
  const qText = `
    UPDATE "mission" 
    SET "manifesto_text" = $1
    WHERE "id" = $2 AND "user_id" = $3; 
    `;
  pool.query(qText, [manifestoText, id, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error PUTing missionStatement', error);
    res.sendStatus(500);
  });  
});



module.exports = router;