const gameCtrl = {};

gameCtrl.renderGameForm = (req, res) => {
    res.render('add');
}

gameCtrl.addItem = (req, res) => {
    console.log(req.body);
    res.send('New game added')
};

gameCtrl.getAll = (req, res) => {
    res.send('Get all');
}

gameCtrl.renderEditForm = (req, res) => {
    res.send('Editing');
}

gameCtrl.updateGame = (req, res) => {
    res.send('Update game');
}

gameCtrl.deleteGame = (req, res) =>{
    res.send('deleting game');
}





module.exports = gameCtrl;