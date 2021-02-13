// this file spins up express aplication which makes handling requests easier for us.
const express = require("express");

const app = express();

const morgan = require("morgan");

const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes that handle requests
const agentsRoute = require("./routes/agents");
const logsRoute = require("./routes/logs");
const resolutionRoute = require("./routes/resolution");
let agents = require("./json-data/agents");
let logs = require("./json-data/logs");
let resolutions = require("./json-data/resolution");

// const resolutionsRoute = require("./routes/resolutions");

app.use("/agents", agentsRoute);
app.use("/logs", logsRoute);
app.use("/resolution", resolutionRoute);

//Error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      massage: error.message
    }
  });
});

module.exports = app;
