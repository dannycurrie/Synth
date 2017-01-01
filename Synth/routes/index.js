var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/app/Test', function(req, res, next) {
  console.log('blimey');
});

module.exports = router;
