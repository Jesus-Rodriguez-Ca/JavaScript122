const indexCtrl = {};
const Game = require('../models/game');

var bodyParser  = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


indexCtrl.renderIndex = async(req, res) => { 
    const games = await Game.find().lean();
    res.render('home', {games}); 
};

indexCtrl.renderDetail = (req, res, next) => { 
    // Game.findOne({ name:"Zelda" }).lean()
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