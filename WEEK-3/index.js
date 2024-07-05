const express = require("express");
var cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "WEEK-3")));

app.get("/", (req, res) => {
  res.send("<h1>Hello, mySever!</h1>");
});

app.get("/sum.html", (req, res) => {
  res.sendFile(path.join(__dirname, "sum.html"));
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
  res.send(`Result: The sum of 1 to ${num} is ${sum}`);
});

app.get("/:myName", (req, res) => {
  const myName = req.params.myName;
  res.cookie("username", myName);
  res.send(`<h1>Hello ${myName} !</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
