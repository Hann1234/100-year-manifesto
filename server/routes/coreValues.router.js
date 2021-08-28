const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "core_values" 
    WHERE "user_id" = $1;
    `;

  pool.query( qText, [uId])
  .then((response) => { res.send(response.rows)
  })
  .catch((error) => {
    console.log("Error GETting coreValues", error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body
  const qText = `
    INSERT INTO "core_values" ("user_id", "manifesto_text")
    VALUES ( '$1', '$2' );
    `;

  pool.query(qText, [uId, manifestoText])
  .then(() => { res.sendStatus(201)
  })
  .catch((error) => {
    console.log('Error POSTing coreValues', error);
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
  DELETE FROM "core_values"
  WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool.query( qText, [id, uId])
  .then(() => { res.sendStatus(201)
  })
  .catch((error) => {
    console.log('Error DELETing coreValues', error);
    res.sendStatus(500);
  });
});

/**
 * PUT route template
 */
 router.put('/', (req, res) => {
  // PUT route code here
});



module.exports = router;