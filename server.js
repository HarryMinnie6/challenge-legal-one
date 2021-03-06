const http = require("http");
const app = require("./app");
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config;
const server = http.createServer(app);
const path = require("path");

app.use(cors());

// // serve static assets in production

//set static folder
// app.use(express.static("client/build"));
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// app.use('/',express.static(__dirname, 'client/build'));
// app.get('/',function(req,res){ res.sendFile(INDEX); })
