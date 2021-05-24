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
// mongoose.connection.on('open', () => {
//     console.log('Mongoose connected.');
//   });

  const gamesSchema = new Schema({
    // id: Number,
    name: {type: String, required: true },
    price: Number,
    version: String,
    available: Boolean
   });
   const Game = model('Game', gamesSchema);
   module.exports = Game;
   //module.exports  = {const: Game = model('Game', gamesSchema)};
  //  export const Games = mongoose.model('Game', gameSchema);
