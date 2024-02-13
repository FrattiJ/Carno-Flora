const mongoose = require("mongoose");

const { Schema } = mongoose;

const item = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  image: {
    type: String,
  },
});

const Items = mongoose.model("items", item);

module.exports = Items;
