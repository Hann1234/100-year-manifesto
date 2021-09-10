const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET active access codes (admin only)
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
   if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    const qText = `
      SELECT * FROM "access_code"
      WHERE "expiration_date" >= NOW()
    `;
  
    pool.query(qText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting active access codes", error);
      res.sendStatus(500);
    });
   } else {
     //user doesn't have permission to access this route
    res.sendStatus(403);
   }
  });

/**
 * POST route for creating new access code (admin only)
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
  if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    const uId = req.user.id;
    const access_code = req.body.access_code;
    const expiration_date = req.body.expiration_date;

    const qText = `
      INSERT INTO "access_code" ("user_id", "code", "expiration_date")
      VALUES ( $1, $2, $3 );
    `;
  
    pool.query(qText, [uId, access_code, expiration_date])
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log('Error POSTing new access code', error);
        res.sendStatus(500);
      });
  } else {
    //user doesn't have permission to access this route
    res.sendStatus(403);
  }
});

/**
 * DELETE access code
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.role === 'admin' || req.user.role === 'superadmin') {
      const id = req.params.id
      const qText = `
        DELETE FROM "access_code"
        WHERE "id" = $1;
      `;
    
      pool.query( qText, [id])
      .then(() => { res.sendStatus(201);
      })
      .catch((error) => {
        console.log('Error DELETing access code', error);
        res.sendStatus(500);
      });
    } else {
     //user doesn't have permission to access this route
      res.sendStatus(403);
    }
  });

/**
 * PUT route to update access code or expiration date
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    const id = req.params.id;
    const code = req.body.code;
    const expiration_date = req.body.expiration_date;
    const qText = `
      UPDATE "access_code" 
      SET "code" = $1, "expiration_date" = $2
      WHERE "id" = $3; 
    `;

    pool.query(qText, [code, expiration_date, id])
    .then(() => { res.sendStatus(201);
    })
    .catch((error) => {
      console.log('PUT error - failed to update user role', error);
      res.sendStatus(500);
    });  
  } else {
    //user doesn't have permission to access this route
     res.sendStatus(403);
   }
  });

module.exports = router;