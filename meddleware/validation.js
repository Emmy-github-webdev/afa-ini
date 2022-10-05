const { check } = require('express-validator');


exports.formValidator = (req, res) => [
    check('name')
      .not()
      .isEmpty()
      .withMessage('Name is required'),

    check('email')
      .isEmail()
      .withMessage('Must be valid email address'),
];