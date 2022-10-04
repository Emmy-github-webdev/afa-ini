const express = require('express');
const router = express.Router();
module.exports = router;

router.get("/user", (req, res) => {
  res.json("User endpoint");
});

module.exports = router;