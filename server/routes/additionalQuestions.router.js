const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/',rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "additional_questions" 
    WHERE "user_id" = $1;
    `;

  pool.query( qText, [uId])
  .then((response) => { res.send(response.rows);
  })
  .catch((error) => {
    console.log("Error GETting additionalQuestions", error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
 outer.post('/', rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText;
  const question = req.body.question;
  const qText = `
  INSERT INTO "additional_questions" ("user_id", "question", "manifesto_text")
  VALUES ( $1, $2, $3 );
    `;

  pool.query(qText, [uId, question, manifestoText])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error POSTing additionalQuestions', error);
    res.sendStatus(500);
  });
});

/**
 * DELETE route template
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const id = req.params.id
  const uId = req.user.id
  const qText = `
  DELETE FROM "additional_questions"
  WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool.query( qText, [id, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('Error DELETing additionalQuestions', error);
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