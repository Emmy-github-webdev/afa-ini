const express = require('express');
const router = express.Router();
const {signup, getUsers} = require('../../controllers/userController');
const { userSignupValidator } = require('../../meddleware/validation');

router.post("/", userSignupValidator, signup);
router.get("/", getUsers)

module.exports = router;