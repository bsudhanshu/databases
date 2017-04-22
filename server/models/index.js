var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which produces all the messages
    
    post: function (req, res) {
      var usernameIDstr = 'SELECT id FROM username WHERE name= ' + '"' + req.body.username + '"';

      db.query(usernameIDstr, function (err, results){
        usernameID = results[0].id;
        console.log('usernameID', usernameID);

        var queryString = 'INSERT INTO messages (message_text, id_user) VALUES (' + '"' + req.body.message + '"' + ',' + usernameID + ')';
        
        console.log('queryString', queryString)
        db.query(queryString, function (){console.log('Posted message to db')});
      });

   
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

