const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const access_code = req.body.access_code;

  const queryText = `
    INSERT INTO "user" ("name", "email", "password")
      SELECT $1, $2, $3
    WHERE EXISTS (
        SELECT * FROM "access_code"
        WHERE "code" = $4 and "expiration_date" >= NOW()
      )
    RETURNING "id";
  `;

  pool
    .query(queryText, [name, email, password, access_code])
    .then((response) => {
      console.log(response.rows);
      if (response.rows.length === 1) {
        res.sendStatus(201);
      } else {
        res.sendStatus(403);
      }
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  console.log();
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
