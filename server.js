const http = require("http");
const app = require("./app");
const express = require("express");
const port = process.env.PORT || 5000;

const server = http.createServer(app);

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("./client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
