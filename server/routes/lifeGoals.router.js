const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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