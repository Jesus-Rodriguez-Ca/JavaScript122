const gameCtrl = {};
const Game = require("../models/game");
const item = require("./../data");

gameCtrl.renderGameForm = (req, res) => {
   res.render("add"); 
};

gameCtrl.addItem = async (req, res) => {
  try {
    const { name, price, version, available } = req.body;
    const verify = item.getItem({ name, price, version, available });
    console.log(verify);
    const newGame = new Game({ name, price, version, available });
    const temp = await newGame.save();
    res.status(200).json({ success: true, temp, messege: 'game added!' });
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

// gameCtrl.updateGame = (req, res) => {
//   console.log(req.body)
//   res.send("Update game");
// };

gameCtrl.updateGame = async(req, res) => {
  const game = req.body;
  const update = {$set:{ 'name': req.body.name, 'price': req.body.price, 'version': req.body.version, 'available': req.body.available }}
  const option = {upsert: true}
  const gameUpdated = await Game.updateOne(game , update ,option); 
  if(gameUpdated){
  res.status(200).json({success:true, game, message:'Game updated'})
  }else{
    res.status(500).json({success:false, game, message:'Failed to update'})

  }
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
