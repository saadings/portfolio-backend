var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({Message: "Hello from backend"});

});

module.exports = router;
