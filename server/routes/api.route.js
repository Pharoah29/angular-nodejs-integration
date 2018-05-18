const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

router.get("/", (req, res) => {
  fetch("https://my.api.mockaroo.com/users.json?key=55717f40")
    .then(data => data.json())
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
