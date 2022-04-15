const express = require('express');
const router = express.Router();
const axios = require("axios").default;
const test = 'ethereum';

const options = {
  method: 'GET',
  url: `https://api.coingecko.com/api/v3/search?query=${test}`
};


module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    axios.request(options).then((response) =>{
      res.json(response.data);
    }).catch((error) =>{
      console.error(error);
    });
  });
  return router;
};