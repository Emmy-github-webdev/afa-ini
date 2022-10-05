const express = require('express');
const router = express.Router();
const {signup} = require('../../controllers/userController');
const {formValidator} = require('../../meddleware/validation');

router.post("/", signup, formValidator);
router.get("/", (req, res) => {
  res.json({message: "Get score for the users"})
})

module.exports = router;