const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Carts = require('./Carts');

const User = new Schema({
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
  pW: {
    type: String,
    required: true,
    minlength: 8
  },
  cart: [Carts.schema]
});

User.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

User.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model('Users', User);

module.exports = Users;
