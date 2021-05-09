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

// function addItem(name){       // Adds an element to the end of the array
//     let temp = getItem(name);
//     if(temp == false){
      
//   

console.log(getItem("blala"));