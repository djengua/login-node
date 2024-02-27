const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello world!");
});

module.exports = app;