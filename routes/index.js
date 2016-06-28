var express = require('express');
var router = express.Router();
var User = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Binary BnB' });
});

router.post('/', function(req, res, next){
  var api = require('../models/User');
  console.log(user);
  var user = new User({
    name: req.param('name'),
    username: req.param('username'),
    email: req.param('email'),
    password_digest: req.param('password_digest')
  });
  console.log(user);
  user.save().then(function(result) {
    res.json(result);
  }).error(function(err) {
    res.json({ message: err });
  });

  res.redirect('/new');
});

router.get('/new', function(req,res,next){
  res.render('signIn', {title: 'BnB sign in'});
});

module.exports = router;
