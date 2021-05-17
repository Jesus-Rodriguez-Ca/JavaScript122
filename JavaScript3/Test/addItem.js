const assert = require("chai").assert;
const dataModule = require("../data");


function game(id, name, price, version, available) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.version = version;
  this.available = available;
}

let games = [
  {
    id: 1,
    name: "Smash Bros",
    price: "60",
    version: "1.2.1",
    available: true,
  },
  {
    id: 2,
    name: "Zelda",
    price: "70",
    version: "2.2.2",
    available: false,
  },
  {
    id: 3,
    name: "Super Mario",
    price: "65",
    version: "2.1",
    available: true,
  },
  {
    id: 4,
    name: "Pokemon",
    price: "68",
    version: "1.2.3",
    available: true,
  },
  {
    id: 5,
    name: "Splatoon",
    price: "71",
    version: "2.2.3",
    available: false,
  },
];

function getItem(game) {
  // Gets an element by name from the array games
  return games.filter((word) => word.name === game);
}

function addItem(tempGame) {
  let newGame = new game(
    tempGame.id,
    tempGame.name,
    tempGame.price,
    tempGame.version,
    tempGame.available
  );
  let temp = getItem(tempGame.name);
  if (temp.length == 0) {
    games.push(newGame);
    console.log("New Game added to the list!");
    return true;
  } else {
    console.log("Game already exist!");
    return false;
  }
}

describe("Should add new video game to the game list", function () {
  describe("#addItem()", function () {
    it("When adding a game, the list of games should increment to 6 and we should have the new game in the list if the game do not exist already", function () {
      let test = addItem({
        id: 6,
        name: "Perfect Dark",
        price: 50.0,
        version: 1.3,
        available: true,
      });
      //   console.log(temp[0].name)
      assert.isTrue(test);
      assert.equal("Perfect Dark", games[5].name);
      assert.lengthOf(games, 6);
    });

    it("When adding a game that already exist, the list of games should stay the same and the game should not be added to the list", function () {
      let games = [
        {
          id: 1,
          name: "Smash Bros",
          price: "60",
          version: "1.2.1",
          available: true,
        },
        {
          id: 2,
          name: "Zelda",
          price: "70",
          version: "2.2.2",
          available: false,
        },
        {
          id: 3,
          name: "Super Mario",
          price: "65",
          version: "2.1",
          available: true,
        },
        {
          id: 4,
          name: "Pokemon",
          price: "68",
          version: "1.2.3",
          available: true,
        },
        {
          id: 5,
          name: "Splatoon",
          price: "71",
          version: "2.2.3",
          available: false,
        },
      ];

      let test = addItem({
        id: 6,
        name: "Zelda",
        price: 50.0,
        version: 1.3,
        available: true,
      });
      assert.isFalse(test);
      assert.lengthOf(games, 5);
    });
  });
});
