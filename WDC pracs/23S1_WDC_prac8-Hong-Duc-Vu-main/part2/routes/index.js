var express = require('express');
var router = express.Router();

// const connectDb = (req, res, next) => {
//   req.pool.getConnection((err, connection) => {
//     if (err) {
//       console.error("Error connecting db");
//       return next(err);
//     }
//     req.dbConnection = connection;
//     next();
//   });
// };
// router.use(connectDb);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get Actor route
router.get('/get-actor', function (req, res, next) {

  req.pool.getConnection(function (cerr, connection) {
    // handling connection error
    if (cerr) {
      console.log("Connection ERROR");
      res.sendStatus(500);
    }

    // try querying
    let query = 'SELECT first_name, last_name FROM actor';
    connection.query(query, function (qerr, rows) {
      // release connection after query
      connection.release();

      // handle query error
      if (qerr) {
        console.log("Query error");
        res.sendStatus(500);
        return;
      }

      // return query result
      res.json(rows);
    });// connection.query
  }); // req.pool.getConnection
}); // router


router.post('/add-actor', function (req, res, next) {

  if ('first_name' in req.body && 'last_name' in req.body) {

    req.pool.getConnection(function (cerr, connection) {
      // handling connection error
      if (cerr) {
        console.log("Connection error");
        res.sendStatus(500);
      }

      // try query
      let query = 'INSERT INTO actor(first_name, last_name) VALUES(?, ?)';

      connection.query(query, [req.body.first_name, req.body.last_name], function (qerr, rows) {
        // release connection after query
        connection.release();

        // handle query error
        if (qerr) {
          console.log("Query error");
          res.sendStatus(500);
          return;
        }

        // return query result
        res.json(rows);
      }); // connection.query

    }); // req.pool.getConnection
  } // if
}); // router


module.exports = router;
