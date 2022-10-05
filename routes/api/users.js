const express = require('express');
const router = express.Router();
const {signup, getUsers} = require('../../controllers/userController');
const {formValidator} = require('../../meddleware/validation');

router.post("/", formValidator, signup);
router.get("/", getUsers)

module.exports = router;