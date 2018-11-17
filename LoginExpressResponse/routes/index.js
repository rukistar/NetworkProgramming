var express = require('express');
var router = express.Router();
var engine = require('../module/engine');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Login', function (req, res, next) {
  res.render('login', { title: '로그인' });
});

router.post('/', function (req, res) {
  console.log(req.body.msg);
  if (req.body.msg) {
    var json = JSON.parse(req.body.msg);
    engine.execute(json, function (data) {
      res.json(data);
    });
  }
  else {
    res.json({result:"error"});
  }
});

module.exports = router;
