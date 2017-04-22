var models = require('../models');
var mysql = require('mysql');


var dbConnection;

dbConnection = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

dbConnection.connect();


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {

      var queryString = 'INSERT INTO messages VALUES (' + 1 + ',' + '"' + req.body.message + '"' + ')';
      dbConnection.query(queryString, function (){console.log('Posted message to db')});

      // var readString = 'SELECT * FROM messages';
      // dbConnection.query(readString, function (err, results){console.log('results', results); console.log('result length', results.length)});
   
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      var queryString = 'INSERT INTO username VALUES (' + 2 + ',' + '"' + req.body.username + '"' + ')';
      dbConnection.query(queryString, function (){console.log('Posted username to db')});
      
      // var readString = 'SELECT * FROM username';
      // dbConnection.query(readString, function (err, results){console.log('results USERNAME', results)});
      
      res.end();
    }
  }
};

