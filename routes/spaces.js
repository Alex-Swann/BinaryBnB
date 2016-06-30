var express = require('express');
var router = express.Router();
var space = require('../models/Space');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(res.currentUser);
  res.render('spaces/index', { title: 'Spaces', user: res.currentUser });
});

router.get('/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a new space' });
});

router.post('/new', function(req, res, next) {
  space.create(req, res);
  res.redirect('/spaces');
});

module.exports = router;
