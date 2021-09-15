const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route for additional_questions
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
    SELECT * FROM "additional_questions" 
    WHERE "user_id" = $1;
    `;

  pool
    .query(qText, [uId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting additionalQuestions", error);
      res.sendStatus(500);
    });
});

/**
 * GET route for specific user's additional_questions
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  if (req.user.role === "admin" || req.user.role === "superadmin") {
    const uId = req.params.id;
    const qText = `
        SELECT * FROM "additional_questions" 
        WHERE "user_id" = $1;
      `;

    pool
      .query(qText, [uId])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((error) => {
        console.log("Error GETting specific users additionalQuestions", error);
        res.sendStatus(500);
      });
  } else {
    console.log(
      "Permission denied GETting specific users additionalQuestions",
      error
    );
    res.sendStatus(403);
  }
});

/**
 * POST route for additional_questions
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText;
  const question = req.body.question;
  const qText = `
  INSERT INTO "additional_questions" ("user_id", "question", "manifesto_text")
  VALUES ( $1, $2, $3 );
    `;

  pool
    .query(qText, [uId, question, manifestoText])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error POSTing additionalQuestions", error);
      res.sendStatus(500);
    });
});

/**
 * DELETE route for additional_questions
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const uId = req.user.id;
  const qText = `
  DELETE FROM "additional_questions"
  WHERE "id" = $1 AND "user_id" = $2;
  `;

  pool
    .query(qText, [id, uId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error DELETing additionalQuestions", error);
      res.sendStatus(500);
    });
});

/**
 * PUT route for additional_questions
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText;
  const question = req.body.question;
  const qText = `
    UPDATE "additional_questions" 
    SET "question" = $1, 
    "manifesto_text" = $2
    WHERE "id" = $3 AND "user_id" = $4; 
    `;

  pool
    .query(qText, [question, manifestoText, id, uId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error PUTing additional_questions", error);
      res.sendStatus(500);
    });
});

module.exports = router;
