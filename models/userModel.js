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
    type: Number,
    default: 0
  },

  occupation: {
    type: String,
    default: 'none'
  },

  currentlyemployed: {
    type: String,
    default: 'no'  
  },
  yearsOfEmployment: {
    type: Number,
    default: 0,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
  },

  address: {
    type: String,
    default: 'none'
  },

  score: {
    type: Number,
    required: true,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('User', UserSchema);
