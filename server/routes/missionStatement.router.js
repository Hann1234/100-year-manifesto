const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
 router.get('/',rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "mission" 
    WHERE "user_id" = $1;
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
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

/**
 * DELETE route template
 */
 router.delete('/', (req, res) => {
  // DELETE route code here
});

/**
 * PUT route template
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const manifestoText = req.body
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