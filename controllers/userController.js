const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

exports.getUsers = asyncHandler(async(req, res) => {
  const users = await User.find().sort({score: -1});
  res.json(users);
});