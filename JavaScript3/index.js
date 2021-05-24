require('./models/game'); 
require('dotenv').config();
require("./data");
const methodOverride = require('method-override');
const dataModule = require("./data");
const express = require("express");
const exphbs = require("express-handlebars");
const Joi = require('joi');
const path = require('path');
const { ENGINE_METHOD_ALL } = require('constants');





const app = express();
const port = 3000;


// let allGames = dataModule.getAll();

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

         ////////    First type   //////
// app.get("/", (req, res) => {
//   res.render("home", { games: allGames, addItem: dataModule.addItem });
// });

      /////////    2nd type  ////////////
// app.get('/', (req, res, next) => {
//   Game.find({}).lean()
//     .then((games) => {
//       // respond to browser only after db query completes
//       res.render("home", { games: allGames, addItem: dataModule.addItem });
//     })
//       .catch(err => next(err))
// });

      /////////////  3er type///
      
      // ROUTES ///
app.use(require('./routes/index.routes'));
app.use(require('./routes/game.routes'));

// app.get("/about", (req, res) => {
//   res.render("about");
// });


// app.get("/detail", (req, res) => {
//   const { item } = req.query;
//   const temp = dataModule.getItem(item);
//   res.render("detail", { game: temp[0] });
// });

app.get('/detail', (req,res,next) => {
  Game.findOne({ name:req.query.name }).lean()
      .then((game) => {
          res.render("detail", { game: game });
      })
      .catch(err => next(err));
});

app.post("/", (req, res) => {
    const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    // password: joi.string.min(10).max(15).required(),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    birthday: Joi.date().max('1-1-2004').iso()
  });
  Joi.valid(req.body, schema, (err, result)=>{
    if(err){
      res.send('an error has occured');
    }
    res.send('successfully posted data');
  })
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
