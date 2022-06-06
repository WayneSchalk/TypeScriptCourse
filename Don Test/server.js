"use strict";
const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const path = require("path");

var fs = require("fs");

var saveToFile = fs.createWriteStream("contacts.txt", {
  flags: "a",
  encoding: "utf-8",
  headers: true,
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/app.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/app.js"));
});

app.post("/contact", (req, res) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let email = req.body.email;
  let phone = req.body.phone;
  console.log(name, surname, email, phone);
  // save as pipe delimited file
  saveToFile.write(
    `${name}|${surname}|${email}|${phone}\n`,
    "utf-8",
    function (err) {
      if (err) {
        console.log(err);
      }
    }
  );

  return res.json({
    message: "success",
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
