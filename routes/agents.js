const express = require("express");

const router = express.Router();

//homepage => display logs
//aggregated table
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /agents",
  });
});
router.get("/:identifier", (req, res, next) => {
  const { identifier } = req.params;
  if (identifier === true) {
    res.status(200).json({
      message: "Handling GET requests to /agents",
      identifier: identifier,
    });
  } else {
    res.status(200).json({
      message: "you passed an id",
    });
  }
});
module.exports = router;
