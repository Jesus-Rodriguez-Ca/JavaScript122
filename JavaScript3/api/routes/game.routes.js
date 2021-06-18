const { Router } = require("express");
const router = Router();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const {
  renderGameForm,
  addItem,
  getAll,
  renderEditForm,
  updateGame,
  deleteGame,
} = require("../controllers/game.controller");

 router.get("/add", renderGameForm);

 router.post("/add-new",urlencodedParser, addItem);

router.get("/game", getAll);

router.get("/edit/:name", renderEditForm);

router.put("/edit/:name", updateGame);

router.get('/delete/:name', deleteGame);

module.exports = router;
