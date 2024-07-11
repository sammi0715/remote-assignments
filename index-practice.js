const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();

const port = 3000;

app.use(cookieParser());
app.use(express.static("WEEK-3"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, mySever!</h1>");
});

app.get("/getData", (req, res) => {
  const number = req.query.number;

  if (!number) {
    return res.send("<h1>Lack of Parameter</h1>");
  }

  const num = parseInt(number);
  if (isNaN(num) || num <= 0) {
    return res.send("<h1>Wrong Parameter</h1>");
  }

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  res.send(`<h1>Result: The sum of 1 to ${num} is ${sum}</h1>`);
});

app.get("/trackName", (req, res) => {
  const name = req.query.name;
  if (name) {
    res.cookie("name", name);
    res.send(`hello ${name}!`);
  } else {
    res.sendFile(__dirname + "/trackName.html");
  }
});

app.get("/myName", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.send(`<h1>Hello ${name}!</h1>`);
  } else {
    res.redirect("/trackName");
  }
});
/*
app.get("/:myName", (req, res) => {
  const myName = req.params.myName;
  res.cookie("username", myName);
  res.send(`<h1>Hello ${myName} !</h1>`);
}); */

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
