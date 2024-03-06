const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.redirect("/hello-world");
});

app.get("/hello-world", (req, res) => {
  res.send("Hello world!");
});

// ? Login
const login = (user, pass) =>
  (message = user == "Admin" && pass == "Password@123" ? "Correct" : "Error");

// console.log(login("Admin", "Password@123"));

app.get("/login", (req, res) => {
  const user = req.query.user,
    password = req.query.password;

  res.send(login(user, password));
});

module.exports = { app, login };
