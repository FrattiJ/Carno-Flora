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
  orders: [Order.schema],
});

User.pre("save", async function (next) {
  // Changed Password to pW
  if (this.isNew || this.isModified("pW")) {
    const saltRounds = 10;
    this.pW = await bcrypt.hash(this.pW, saltRounds);
  }

  next();
});

User.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model("Users", User);

module.exports = Users;
