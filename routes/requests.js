var express = require('express');
var router = express.Router();
var request = require('../models/Request');
var space = require('../models/Space');

router.get('/new', function(req, res, next){
  space.get(req, res);
});

router.post('/new', function(req, res, next){
  res.redirect('/requests/confirm');
});

router.get('/confirm', function(req, res, next){
  res.render('requests/confirm', { title: 'Confirmation'});
});


module.exports = router;
