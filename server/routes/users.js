const express = require('express');
const router = express.Router();
const users = ['Bob', 'Alex', 'Will', 'Tristan'];

const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://yfapi.net/v1/finance/trending/CA',
  params: {
    modules: 'defaultKeyStatistics,assetProfile'
  },
  headers: {
    'x-api-key': 'hJzxoN4ClH9hOkp4RQ0A7VF8SPXzazI4Nw7VOOJ1'
  }
};

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    res.json(users);
  });
  return router;
};