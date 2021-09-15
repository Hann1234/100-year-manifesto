const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * GET route for mantras
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const qText = `
      SELECT * FROM "mantras" 
      WHERE "user_id" = $1
      ORDER BY "id" ASC;
      `;

  pool
    .query(qText, [uId])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting mantras", error);
      res.sendStatus(500);
    });
});

/**
 * GET route for specific user's mantras
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  if (req.user.role === "admin" || req.user.role === "superadmin") {
    const uId = req.params.id;
    const qText = `
      SELECT * FROM "mantras" 
      WHERE "user_id" = $1
      ORDER BY "id" ASC;
     `;

    pool
      .query(qText, [uId])
      .then((response) => {
        res.send(response.rows);
      })
      .catch((error) => {
        console.log("Error GETting specific users mantras", error);
        res.sendStatus(500);
      });
  } else {
    console.log("Permission denied GETting specific users mantras", error);
    res.sendStatus(403);
  }
});

/**
 * POST route for mantras
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText;
  const qText = `
      INSERT INTO "mantras" ("user_id", "manifesto_text")
      VALUES ( $1, $2 );
      `;

  pool
    .query(qText, [uId, manifestoText])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error POSTing mantras", error);
      res.sendStatus(500);
    });
});

/**
 * DELETE route for mantras
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const uId = req.user.id;
  const qText = `
        DELETE FROM "mantras"
        WHERE "id" = $1 AND "user_id" = $2;
        `;

  pool
    .query(qText, [id, uId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error DELETing mantras", error);
      res.sendStatus(500);
    });
});

/**
 * PUT route for mantras
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  const id = req.params.id;
  const uId = req.user.id;
  const manifestoText = req.body.manifestoText;
  const qText = `
      UPDATE "mantras" 
      SET "manifesto_text" = $1
      WHERE "id" = $2 AND "user_id" = $3; 
      `;
  pool
    .query(qText, [manifestoText, id, uId])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error PUTing mantras", error);
      res.sendStatus(500);
    });
});

module.exports = router;
