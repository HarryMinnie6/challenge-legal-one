const express = require("express");

const router = express.Router();
let agents = require("../json-data/agents");
let logs = require("../json-data/logs");
//homepage => display logs
//aggregated table
router.get("/", (req, res, next) => {
  res.send(logs);
});
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /logs"
  });
});

module.exports = router;
