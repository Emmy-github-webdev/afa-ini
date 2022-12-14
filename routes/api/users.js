const express = require('express');
const router = express.Router();
const User = require('../../models/userModel');
const { body, validationResult } = require('express-validator');
const {getUsers} = require('../../controllers/userController');

// Get all Users
router.get("/", getUsers)

router.post('/',
  body('name', 'Name is required').exists(),
  body('email', 'Enter a valid email address').isEmail(),
  async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()});
    }

    const {name, email, age, occupation, currentlyemployed, yearsOfEmployment, address, score} = req.body;
  let scoreAge, scoreOccupation, scoreCurrentlyemployed, scoreYearsOfEmployment, scoreAddress;

  const userExists = await User.findOne({email});

  if(userExists){
    res.status(400)
    throw new Error('User already exists')
  }

  if (age < 18){
    scoreAge = 0;
  } else {
    scoreAge = 2;
  };

  if (occupation == 'none'){
    scoreOccupation = 0;
  } else {
    scoreOccupation = 2;
  };

  if(currentlyemployed == 'no'){
    scoreCurrentlyemployed = 0;
  } else {
    scoreCurrentlyemployed = 2;
  };

  if(yearsOfEmployment < 1){
    scoreYearsOfEmployment = 0;
  }else {
    scoreYearsOfEmployment = 2;
  };

  if (address == 'none'){
    scoreAddress = 0;
  } else {
    scoreAddress = 2;
  };
  
  let totalScore = (scoreAge + scoreOccupation + scoreCurrentlyemployed + scoreYearsOfEmployment + scoreAddress);
  console.log('Total score is:', totalScore);

  const user = await User.create({
    name, 
    email, 
    age, 
    occupation, 
    currentlyemployed, 
    yearsOfEmployment, 
    address, 
    score: totalScore
  });

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
      score: user.score
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  }
)

module.exports = router;