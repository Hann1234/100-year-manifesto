const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route gets all coreValues for user
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "core_values" 
    WHERE "user_id" = $1;
    `;

  pool.query( qText, [uId])
  .then((response) => { res.send(response.rows);
  })
  .catch((error) => {
    console.log("Error GETting coreValues", error);
    res.sendStatus(500);
  });
});

/**
 * POST route adds a coreValues
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body
  const qText = `
    INSERT INTO "core_values" ("user_id", "manifesto_text")
    VALUES ( $1, $2 );
    `;

  pool.query(qText, [uId, manifestoText])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error POSTing coreValues', error);
    res.sendStatus(500);
  });
});

/**
 * DELETE route removes coreValues 
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const qText = `
  DELETE FROM "core_values"
  WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool.query( qText, [id, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error DELETing coreValues', error);
    res.sendStatus(500);
  });
});

/**
 * PUT route edits coreValues text
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const manifestoText = req.body
  const qText = `
    UPDATE "core_values" 
    SET "manifesto_text" = $1
    WHERE "id" = $2 AND "user_id" = $3; 
    `;
  pool.query(qText, [manifestoText, id, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error PUTing coreValues', error);
    res.sendStatus(500);
  });  
});



module.exports = router;