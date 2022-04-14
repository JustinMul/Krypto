const express = require('express');
const router = express.Router();
const users = ['Bob', 'Alex', 'Will', 'Tristan'];

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {

    res.json(users);

  });

  return router;
};
