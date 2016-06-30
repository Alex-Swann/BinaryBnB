var express = require('express');
var router = express.Router();
var user = require('../models/User.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Binary BnB' });
});

router.post('/', function(req, res, next){
  user.create(req, res);
  res.redirect('/new');
});

router.get('/new', function(req,res,next){
  res.render('sessions/signIn', {title: 'BnB sign in'});
});

router.post('/new', function(req,res,next){
  user.authenticate(req, res);
});

router.post('/signOut', function(req,res,next) {
  req.session.destroy();
  res.redirect('/spaces')
});

module.exports = router;
