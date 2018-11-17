var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Login', function(req, res, next) {
  res.render('login', { title: '로그인' });
});

module.exports = router;
