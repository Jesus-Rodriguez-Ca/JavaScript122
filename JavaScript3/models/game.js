const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');
require('../credentials');

//  const connection = process.env.MONGODB_URI;
mongoose.connect(connection,{
    dbName: 'DBNAME',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
  });

  const gamesSchema = new Schema({
    id: Number,
    name: {type: String, required: true },
    price: Number,
    version: String,
    available: Boolean
   });
   
   module.exports  = {const: Game = model('Game', gamesSchema)};
  //  export const Games = mongoose.model('Game', gameSchema);
