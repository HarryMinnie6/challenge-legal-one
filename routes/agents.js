const express = require("express");

const router = express.Router();

//Routes to JSON files
let agents = require("../json-data/agents");
let logs = require("../json-data/logs");

//getting ALL AGENTS
router.get("/", (req, res, next) => {
  res.send(agents);
});

//getting AGENT LOG
router.get("/:identifier", (req, res, next) => {
  const { identifier } = req.params;
  const foundAgentLog = Object.values(logs).filter(
    (user) => user.agentIdentifier === identifier
  );
  console.log(foundAgentLog);
  res.send(foundAgentLog);
});

//getting AGENT PROFILE
router.get("/profile/:identifier", (req, res, next) => {
  const { identifier } = req.params;
  const foundAgentProfile = Object.values(agents).filter(
    (user) => user.identifier == identifier
  );
  console.log(foundAgentProfile);
  res.send(foundAgentProfile);
});


//getting AGENT name using logs for homepage
router.get("/test/:identifier", (req, res, next) => {
  const { identifier } = req.params;
  const foundAgentProfileFromLogs = Object.values(agents).filter(
    (user) => user.identifier ===identifier
  );
  console.log(foundAgentProfileFromLogs);
  // res.send(foundAgentProfile);
});
module.exports = router;
