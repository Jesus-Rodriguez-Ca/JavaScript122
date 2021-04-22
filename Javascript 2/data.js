let games = [
{ name : "Smash Bros", price : "60", version: "1.2.1", available : true},
{ name : "Zelda", price : "70", version: "2.2.2", available : false},
{ name : "Super Mario", price : "65", version: "2.1", available : true},
{ name : "Pokemon", price : "68", version: "1.2.3", available : true},
{ name : "Splatoon", price : "71", version: "2.2.3", available : false}
];

function getItem(game){
    
    return games.find((item) => {
        return item.name == game;
});

}

function getAll(){
    games.forEach((game) => {
        console.log('Game: ' + game.name + '<br>Price: ' + game.price + '<br>Version: ' + game.version + '<br>Available: ' + game.available);
    });
}

module.exports = {getAll, getItem};


