const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');
require('../credentials');

//  const connection = process.env.MONGODB_URI;
mongoose.connect(connection,{
    dbName: 'games',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(db => console.log('Mongoose connected')) 
  .catch(err => console.log('err'));


  const gamesSchema = new Schema({
    name: {type: String, required:true}, //delete required to test
    price: Number,
    version: String,
    available: Boolean
   });
   const Game = model('Game', gamesSchema);
   module.exports = Game;
   
