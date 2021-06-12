require("./models/game");

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

function getAll() {
  // Gets all the elements of the array games
  return games;
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
    console.log(games);
    console.log("New Game added to the list!");
  } else {
    console.log("Game already exist!");
  }
}

addItem({id:6, name:"Perfect Dark", price: 50.00,version: 1.3,available: true})

function deleteItem(game) {
  let myArr = games;
  let index = myArr.findIndex(function (o) {
    return o.name === game;
  });
  if (index !== -1) myArr.splice(index, 1);
  //return myArr.splice(index, 1);
  // console.log(myArr);
}
console.log(games.length);

module.exports = { getAll, getItem, addItem, deleteItem, games, game };
