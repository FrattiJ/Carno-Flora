const mongoose = require('mongoose');

const { Schema } = mongoose;

const Cart = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items'
    }
  ],
  user: 
    {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    }
  

});

const Carts = mongoose.model('Carts', Cart);

module.exports = Carts;
