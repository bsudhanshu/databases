var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which produces all the messages
    
    post: function (req, res) {
      var queryString = 'INSERT INTO messages (message_text) VALUES (' + '"' + req.body.message + '"' + ')';
      db.query(queryString, function (){console.log('Posted message to db')});
   
      res.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {},
    
    post: function (req, res) {
      var queryString = 'INSERT INTO username (name) VALUES ('+ '"' + req.body.username + '"' + ')';
      db.query(queryString, function (){console.log('Posted username to db')});
            
      res.end();
    }
  }
};

