// const {check} = require('express-validator');

exports.userSignupValidator = (req, res, next) => {
  req.check('name', 'Name is required').notEmpty()
  req.check('email', 'It must be a valid email')
      .matches(/.+\@.+\..+/)
      .withMessage('Email must contain @')
      .isLength({
          min: 4, 
          max: 32
      });
      const errors = req.validationErrors();
      if(errors){
          const firstError = errors.map(error => error.msg)[0];
          return res.status(400).json({error: firstError});
      }

      next();

};