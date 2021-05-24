const indexCtrl = {};
const Game = require('../models/game');

indexCtrl.renderIndex = async(req, res) => { 
    const games = await Game.find().lean();
    res.render('home', {games});
};

indexCtrl.renderDetail = async(req, res) => { 
   const games = await Game.find().lean();
    res.render("detail",{name:games});
};

indexCtrl.renderAbout = (req, res) => { 
    res.render("about",);
};

// indexCtrl.renderAdd = (req, res) => { 
//     res.render("add");
// };

indexCtrl.renderDelete = (req, res) => { 
    res.render("delete");
};

module.exports = indexCtrl;