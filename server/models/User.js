const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Carts = require("./Cart");
const Order = require("./Order");

const User = new Schema({
  fN: {
    type: String,
    required: true,
    trim: true,
  },
  lN: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pW: {
    type: String,
    required: true,
    minlength: 8,
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
  orders: [Order.schema],
});

User.pre("save", async function (next) {
  if (this.isNew || this.isModified("pW")) {
    const saltRounds = 10;
    this.pW = await bcrypt.hash(this.pW, saltRounds);
  }

  next();
});

User.methods.isCorrectPassword = async function (pW) {
  return await bcrypt.compare(pW, this.pW);
};

const Users = mongoose.model("Users", User);

module.exports = Users;
