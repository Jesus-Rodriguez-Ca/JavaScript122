const indexCtrl = {};
const Game = require('../models/game');
const bodyParser  = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


indexCtrl.renderIndex = async(req, res) => { 
    const games = await Game.find().lean();
    if(games.length == 0){
        return res.status(404).json({success:false, message:'No games exist'})
    }
    res.status(200).json({success:true,games})
    // if(games){
    //     res.render('home', {games});
    // } else{
    //     return res.status(500).send('Database Error occurred');
    // }
};

indexCtrl.renderDetail = async(req, res, next) => { 
    const game = await Game.findOne({ name:req.query.name }).lean();
    if(!game){
        return res.status(404).json({success:false, message:'Game do not exist'})
    }
    res.status(200).json({success:true, game})
    // const game = Game.findOne({ name:req.query.name }).lean()
    // .then((game) => {
    //     res.render("detail", { game: game });
    // })
    // .catch(err => next(err));
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