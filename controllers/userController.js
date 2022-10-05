const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

exports.signup = asyncHandler(async(req, res) => {

  const {name, email, age, occupation, currentlyemployed, yearsOfEmployment, address, score} = req.body;

  const userExists = await User.findOne({email})

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  };

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

    let scoreAge, scoreOccupation, scoreCurrentlyemployed, scoreYearsOfEmployment, scoreAddress;

    if (user.age < 18){
      scoreAge = 0;
    } else {
      scoreAge = 2;
    };

    if (!user.occupation){
      scoreOccupation = 0;
    } else {
      scoreOccupation = 2;
    };

    if(!user.currentlyemployed){
      scoreCurrentlyemployed = 0;
    } else {
      scoreCurrentlyemployed = 2;
    };

    if(user.yearsOfEmployment < 1){
      scoreYearsOfEmployment = 0;
    }else {
      scoreYearsOfEmployment = 2;
    };

    if (!user.address){
      scoreAddress = 0;
    } else {
      scoreAddress = 2;
    };
    
    let totalScore = (scoreAge + scoreOccupation + scoreCurrentlyemployed + scoreYearsOfEmployment + scoreAddress);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      occupation: user.occupation,
      currentlyemployed: user.currentlyemployed,
      yearsOfEmployment: user.yearsOfEmployment,
      address: user.address, 
      score: totalScore
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
//  res.json({message: 'Hello from user controller'})
})