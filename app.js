// this file spins up express aplication which makes handling requests easier for us.
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
// app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const path = require("path");

// routes that handle requests
const agentsRoute = require("./routes/agents");
const logsRoute = require("./routes/logs");
const resolutionRoute = require("./routes/resolution");
const callsRoute = require("./routes/calls");
let agents = require("./json-data/agents");
let logs = require("./json-data/logs");
let resolutions = require("./json-data/resolution");

// const resolutionsRoute = require("./routes/resolutions");
app.use(cors())
app.use("/api/v1/agent", agentsRoute);
app.use("/api/v1/logs", logsRoute);
app.use("/api/v1/resolution", resolutionRoute);
app.use("/api/v1/call", callsRoute);

app.use("/", express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

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
      message: error.message,
    },
  });
});

// // serve static assets in production

module.exports = app;
