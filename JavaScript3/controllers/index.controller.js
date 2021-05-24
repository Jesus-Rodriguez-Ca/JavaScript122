const indexCtrl = {};
const Game = require('../models/game');

indexCtrl.renderIndex = async(req, res) => { 
    const games = await Game.find().lean();
    res.render('home', {games});
};

indexCtrl.renderDetail = (req, res, next) => { 
    console.log(req.query.name);
    Game.findOne({ name:req.query.name }).lean()
    .then((game) => {
        res.render("detail", { game: game });
    })
    .catch(err => next(err));
    
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