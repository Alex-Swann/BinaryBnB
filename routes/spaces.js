var express = require('express');
var router = express.Router();
var space = require('../models/Space');


router.get('/', function(req, res, next) {
  space.fetch(req, res);
  // res.render('spaces/index', { title: 'Spaces', user: req.session.object });
});

router.get('/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a new space' });
});

router.post('/new', function(req, res, next) {
  space.create(req, res);
  res.redirect('/spaces');
});



module.exports = router;
