const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

exports.signup = asyncHandler(async(req, res) => {

  const {name, email, age, occupation, currentlyemployed, yearsOfEmployment, address, score} = req.body;

  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name, 
    email, 
    age, 
    occupation, 
    currentlyemployed, 
    yearsOfEmployment, 
    address, 
    score
  })

  if(user){
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      occupation: user.occupation,
      currentlyemployed: user.currentlyemployed,
      yearsOfEmployment: user.yearsOfEmployment,
      address: user.address, 
      address: user.score
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
//  res.json({message: 'Hello from user controller'})
})