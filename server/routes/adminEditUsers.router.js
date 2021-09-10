const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET user information (admin only)
 */
 router.get('/', rejectUnauthenticated, (req, res) => {
   if (req.user.role === 'admin' || req.user.role === 'superadmin') {
    const qText = `
      SELECT "id", "name", "email", "role" FROM "user"
      ORDER BY "id" ASC;
    `;
  
    pool.query( qText)
    .then((response) => { res.send(response.rows);
    })
    .catch((error) => {
      console.log("Error GETting user information", error);
      res.sendStatus(500);
    });
   } else {
     //user doesn't have permission to access this route
    res.sendStatus(403);
   }
  });

/**
 * DELETE user
 */
 router.delete('/:id', rejectUnauthenticated, (req, res) => {
    if (req.user.role === 'superadmin') {
      const id = req.params.id
      const qText = `
        DELETE FROM "user"
        WHERE "id" = $1;
      `;
    
      pool.query( qText, [id])
      .then(() => { res.sendStatus(201);
      })
      .catch((error) => {
        console.log('Error DELETing user', error);
        res.sendStatus(500);
      });
    } else {
     //user doesn't have permission to access this route
      res.sendStatus(403);
    }
  });

/**
 * PUT route to update user privileges
 */
 router.put('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.role === 'superadmin') {
    const id = req.params.id
    const role = req.body.role;
    const qText = `
      UPDATE "user" 
      SET "role" = $1
      WHERE "id" = $2; 
    `;

    pool.query(qText, [role, id])
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