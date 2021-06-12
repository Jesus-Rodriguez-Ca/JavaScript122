const gameCtrl = {};
const Game = require("../models/game");

gameCtrl.renderGameForm = (req, res) => {
   res.render("add"); 
};

gameCtrl.addItem = async (req, res) => {
  try {
    const { name, price, version, available } = req.body;
    console.log(req.body);
    const newGame = new Game({ name, price, version, available });
    const temp = await newGame.save();
    res.status(200).json({ success: true, temp });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Unable to add item" });
  }
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
 const game = await Game.findOneAndDelete({'name':req.params.name}
    );
    if(!game){
      res.status(500).json({success:false, message:'The game was not deleted'})
    }
    res.status(200).json({success:true, game, message:'Game deleted'})
  // res.redirect("/");
};

module.exports = gameCtrl;
