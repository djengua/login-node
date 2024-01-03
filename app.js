const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.redirect("/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
