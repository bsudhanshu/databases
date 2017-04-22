var models = require('../models');
var mysql = require('mysql');
// var db = require('../db');

// db.connect();

module.exports = {
  messages: {
    options : function (req, res) {
      models.messages.options(req, res);
    },    
    get: function (req, res) {
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(req, res);
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};

