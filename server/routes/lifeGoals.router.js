const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
    const uId = req.user.id;
    const manifestoText = req.body
    const qText = `
      INSERT INTO "life_goals" ("user_id", "manifesto_text")
      VALUES ( $1, $2 );
      `;
  
    pool.query(qText, [uId, manifestoText])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error POSTing lifeGoals', error);
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
    DELETE FROM "life_goals"
    WHERE "id" = $1 AND "user_id" = $2;
    `;
  
    pool.query( qText, [id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error DELETing lifeGoals', error);
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
      UPDATE "life_goals" 
      SET "manifesto_text" = $1
      WHERE "id" = $2 AND "user_id" = $3; 
      `;
    pool.query(qText, [manifestoText, id, uId])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error PUTing lifeGoals', error);
      res.sendStatus(500);
    });  
  });



module.exports = router;