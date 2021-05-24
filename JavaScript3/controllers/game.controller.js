const gameCtrl = {};
const Game = require('../models/game');
// const { get } = require('../routes/game.routes');


gameCtrl.renderGameForm = (req, res) => {
    console.log(req.body);
    res.render('add');
}

gameCtrl.addItem = async(req, res) => {
    const {name, price, version, available} = req.body;
    const newGame = new Game({name, price, version, available});
    console.log(newGame);
    // console.log(req.body);
    await newGame.save();
    res.send('New game added')
};

gameCtrl.getAll = async(req, res) => {
    const game = await Game.find();
    res.render('home');
}

gameCtrl.renderEditForm = (req, res) => {
    res.send('Editing');
}

gameCtrl.updateGame = (req, res) => {
    res.send('Update game');
}

gameCtrl.deleteGame = (req, res) =>{
    console.log(req.params.name);
    res.send('deleting game');
}





module.exports = gameCtrl;