const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * PUT route to allow logged in user to change their name
 */
 router.put('/', rejectUnauthenticated, (req, res) => {
  const uId = req.user.id;
  const name = req.body.name;
  console.log("changing display name. user id: ", uId, " old name: ", req.user.name, " new name: ", name);
  const qText = `
    UPDATE "user" 
    SET "name" = $1
    WHERE "id" = $2; 
    `;
  pool.query(qText, [name, uId])
  .then(() => { res.sendStatus(201);
  })
  .catch((error) => {
    console.log('PUT error: failed to update user name', error);
    res.sendStatus(500);
  });  
});



module.exports = router;