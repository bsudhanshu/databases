var db = require('../db');

db.connect();

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};
var headers = defaultCorsHeaders;
headers['Content-Type'] = 'text/plain';


module.exports = {
  messages: {
    options : function (req, res) {
      res.writeHead(200, headers);
      res.end();
    },
    get: function (req, res) {
      res.writeHead(200, headers);
      
      var getMesgStr = 'SELECT * FROM messages';
      db.query(getMesgStr, function (err, results){
        res.end(JSON.stringify(results));
      })
    }, // a function which produces all the messages
    
    post: function (req, res) {
      res.writeHead(200, headers);

      // var usernameIDstr = 'SELECT id FROM username WHERE name= ' + '"' + req.body.username + '"';

      // db.query(usernameIDstr, function (err, results){
        // usernameID = results[0].id;
        var queryString = 'INSERT INTO messages (message_text, username, room_name) VALUES (' + '"' + req.body.message_text + '"' + ',' + '"' + req.body.username + '"' + ',' + '"' + req.body.room_name + '"' + ')';
        db.query(queryString, function (){console.log('Posted message to db')});
      // });

      res.end();      
    } // a function which can be used to insert a message into the database
  },

  users: {
    get: function (req, res) {},
    
    post: function (req, res) {
      res.writeHead(200, headers);

      var queryString = 'INSERT INTO username (name) VALUES ('+ '"' + req.body.username + '"' + ')';
      db.query(queryString, function (){console.log('Posted username to db')});
            
      res.end();
    }
  }
};

