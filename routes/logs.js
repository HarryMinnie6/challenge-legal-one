const express = require("express");

const router = express.Router();
let agents = require("../json-data/agents");
let logs = require("../json-data/logs");


//getting ALL LOGS
router.get("/", (req, res, next) => {
  res.send(logs);
});




module.exports = router;
