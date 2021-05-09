function game(id, name, price, version, available){ 
  this.id = id;
  this.name = name;
  this.price = price;
  this.version = version;
  this.available = available;
}

  let games = [
    {
      "id": 1,
      "name": "Smash Bros",
      "price": "60",
      "version": "1.2.1",
      "available": true
    },
    {
      "id": 2,
      "name": "Zelda",
      "price": "70",
      "version": "2.2.2",
      "available": false
    },
    {
      "id": 3,
      "name": "Super Mario",
      "price": "65",
      "version": "2.1",
      "available": true
    },
    {
      "id": 4,
      "name": "Pokemon",
      "price": "68",
      "version": "1.2.3",
      "available": true
    },
    {
      "id": 5,
      "name": "Splatoon",
      "price": "71",
      "version": "2.2.3",
      "available": false
    }
  ]


function getItem(game){     // Gets an element by name from the array games
    return games.filter((word) => word.name === game);
};

function getAll(){        // Gets all the elements of the array games
  return games;
}

function addItem(){       // Adds an element to the end of the array
  // temp = new game(6, "Tetris", 69, "1.1.1", true)
  // let temp = getItem(name);
  // if(temp.length == 0){
   // games.push(temp)
  // };
  console.log("Tocayo")
}


function deleteItem(){    //Eliminates the first element of the array games
  games.shift();
}

 module.exports = {getAll, getItem, addItem, deleteItem};