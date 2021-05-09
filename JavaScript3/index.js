const dataModule = require("./data");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 3000;

let allGames = dataModule.getAll();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home", { games: allGames, addItem: dataModule.addItem });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/detail", (req, res) => {
  const { item } = req.query;
  const temp = dataModule.getItem(item);
  res.render("detail", { game: temp[0] });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
