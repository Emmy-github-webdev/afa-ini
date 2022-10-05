const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number
  },

  occupation: {
    type: String
  },

  currentlyemployed: {
    type: Boolean,
    default: no  
  },
  yearsOfEmployment: {
    type: Number,
    default: 0,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
  },

  address: {
    type: String
  },

  date: {
    type: Date,
    default: Date.now
  }

});