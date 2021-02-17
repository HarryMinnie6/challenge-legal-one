const express = require("express");

const router = express.Router();
let agents = require("../json-data/agents");
let resolution = require("../json-data/resolution");
//homepage => display logs
//aggregated table
router.get("/", (req, res, next) => {
  res.send(resolution);
});


module.exports = router;
