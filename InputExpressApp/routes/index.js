var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'test' });
});

// POST
router.post('/', function (req, res) {
  var returnVal = { result: '' };
  if (req.body.msg) {
    console.log("client message : " + req.body.msg);
    returnVal.result= 'success';
  }
  else {
    returnVal.result= 'failure';
  }
  
  res.json(returnVal);
});

module.exports = router;
