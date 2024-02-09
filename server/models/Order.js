const mongoose = require('mongoose');

const { Schema } = mongoose;
const Carts = require('./Cart');

const Order = new Schema({
  fN: {
    type: String,
    required: true,
    trim: true
  },
  lN: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    min: 10
  },
  Carts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Carts',
    },
  ],});

const Orders = mongoose.model('Orders', Order);

module.exports = Orders;
