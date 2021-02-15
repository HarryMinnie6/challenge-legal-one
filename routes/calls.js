const express = require("express");

const router = express.Router();


//Routes to JSON files
let agents = require("../json-data/agents");
let logs = require("../json-data/logs");
let resolution = require("../json-data/resolution");


//getting call logs for one number
router.get("/:number", (req, res, next) => {
  const { number } = req.params;
  const foundAgent = Object.values(logs).filter(
    (user) => user.number == number
  );
  console.log(foundAgent);
  res.send(foundAgent);
});

//getting call logs RESOLUTION for one number
router.get("/resolution/:number", (req, res, next) => {
  const { identifier } = req.params;
  const foundResolution = Object.values(resolution).find(
    (user) => user.agentIdentifier == identifier
  );
  console.log(foundResolution);
  res.send(foundResolution)
});

module.exports = router;
