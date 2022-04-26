const router = require("express").Router();
const axios = require("axios").default;
module.exports = (db) => {
  router.get("/:id/:days", (req, res) => {
    const id = req.params.id;
    const day = req.params.days;

    const currency = "cad";
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${day}&interval=daily`
      )
      .then((response) => {
        res.json(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return router;
};
