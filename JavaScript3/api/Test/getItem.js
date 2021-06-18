const assert = require('chai').assert;
const expect = require('chai').expect;
const dataModule = require("../data");
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

describe("Should return the information of the item we want", function () {
  describe("#getItem()", function () {


    it("When pasing a game name that exist in the list, getItem should return the information of the game", function () {
        function getItem(game) {
          // Gets an element by name from the array games
          return games.filter((word) => word.name === game);
        }
        let temp = getItem("Zelda");
      //   console.log(temp[0].name)
        assert.equal("Zelda", temp[0].name);
      });

      it("When pasing a game name that do NOT exist in the list, getItem should return empty array and no information", function () {
        // function getItem(game) {
        //   // Gets an element by name from the array games
        //   return games.filter((word) => word.name === game);
        // }
        let temp = dataModule.getItem("FakeGame");
        console.log(temp)
        assert.lengthOf(temp,0);
      });
  });
});
