require("./models/game");
require("dotenv").config();
require("./data");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const { Router } = require("express");
const router = Router();
const methodOverride = require("method-override");
const dataModule = require("./data");
const express = require("express");
const exphbs = require("express-handlebars");
const Joi = require("joi");
const path = require("path");
const cors = require('cors');
const app = express();
const port = 5000;
const Game = require("./models/game");


// let allGames = dataModule.getAll();

app.use(express.static(path.join(__dirname, "public")));
// app.use(methodOverride("_method"),cors());
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.json());

//////////       ROUTES      ////////////

// router.get('/', async(req, res) => {
//   const games = await Game.find().lean();
//   res.render('home', {games});
// });

// router.get('/about', (req, res) => {
//   res.render("about",);
// });

// router.get('/detail', (req, res, next) => {
//   console.log(req.query.name);
//   Game.findOne({ name:req.query.name }).lean()
//   .then((game) => {
//       res.render("detail", { game: game });
//   })
//   .catch(err => next(err));
// });

//  router.get('/delete', async (req, res) => {
//   await Game.findOneAndDelete(req.params.name);
//   res.redirect("/");
// });

// router.get("/add", (req, res) => {
//   console.log(req.body);
//   res.render("add");
// });

// router.post("/add-new",urlencodedParser, async (req, res) => {
//   const { name, price, version, available } = req.body;
//   const newGame = new Game({ name, price, version, available });
//   console.log(newGame);
//   console.log(req.body);
//   await newGame.save();
//   res.redirect("/");
// });

// ROUTES ///
app.use(cors());
app.use(require("./routes/index.routes"));
app.use(require("./routes/game.routes"));

// app.post("/", (req, res) => {
//   const schema = Joi.object().keys({
//     email: Joi.string().email().required(),
//     // password: joi.string.min(10).max(15).required(),
//     phone: Joi.string()
//       .regex(/^\d{3}-\d{3}-\d{4}$/)
//       .required(),
//     birthday: Joi.date().max("1-1-2004").iso(),
//   });
//   Joi.valid(req.body, schema, (err, result) => {
//     if (err) {
//       res.send("an error has occured");
//     }
//     res.send("successfully posted data");
//   });
// });
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
