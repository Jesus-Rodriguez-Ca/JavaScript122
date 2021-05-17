const { Router } = require("express");
const router = Router();

const {
  renderGameForm,
  addItem,
  getAll,
  renderEditForm,
  updateGame,
  deleteGame,
} = require("../controllers/game.controller");

router.get("/add", renderGameForm);

router.post("/add-new", addItem);

router.get("/game", getAll);

router.get("/edit/:name", renderEditForm);

router.put("/edit/:name", updateGame);

router.delete("/delete/:name", deleteGame);

module.exports = router;
