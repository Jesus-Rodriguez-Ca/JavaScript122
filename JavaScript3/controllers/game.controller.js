const gameCtrl = {};
const { query } = require("express");
const Game = require("../models/game");

gameCtrl.renderGameForm = (req, res) => {
  
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

gameCtrl.renderEditForm = async(req, res) => {
  const game = await Game.findOne({'name':req.params.name}).lean()
  console.log(game)
  res.render("edit", { game: game });
};

gameCtrl.updateGame = (req, res) => {
  console.log(req.body)
  res.send("Update game");
};

gameCtrl.deleteGame = async (req, res) => {
  await Game.findOneAndDelete({'name':req.params.name}
    );
  res.redirect("/");
};

module.exports = gameCtrl;
