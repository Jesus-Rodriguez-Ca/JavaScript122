const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const fs = require("fs");

let data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

let games = data['games'];

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/" , function (req, res) {
  res.render("home", { games:games });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/detail", (req, res) => {
  let item = req.query.item;
  console.log("number" + item);
  let temp = games.filter(word => word.name === item);
  console.log(temp);
  res.render("detail", { game: temp[0]});
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
