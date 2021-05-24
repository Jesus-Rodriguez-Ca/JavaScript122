const gameCtrl = {};
const Game = require("../models/game");

gameCtrl.renderGameForm = (req, res) => {
  console.log(req.body);
  res.render("add");
};

gameCtrl.addItem = async (req, res) => {
  const { name, price, version, available } = req.body;
  const newGame = new Game({ name, price, version, available });
  console.log(newGame);
  // console.log(req.body);
  await newGame.save();
  res.redirect("/");
};

gameCtrl.getAll = async (req, res) => {
  res.render("home");
};

gameCtrl.renderEditForm = (req, res) => {
  res.send("Editing");
};

gameCtrl.updateGame = (req, res) => {
  res.send("Update game");
};

gameCtrl.deleteGame = async (req, res) => {
  await Game.findOneAndDelete(req.params.name);
  res.redirect("/");
};

module.exports = gameCtrl;
