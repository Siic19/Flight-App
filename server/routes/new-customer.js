var express = require("express");
var router = express.Router();
var authenticate = require('../middlewares/authenticate')

router.post("/", authenticate, (req, res) => {
  res.json({ success: true });
});

module.exports = router;
