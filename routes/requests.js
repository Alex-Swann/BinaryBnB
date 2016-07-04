var express = require('express');
var router = express.Router();
var request = require('../models/Request');
var space = require('../models/Space');

router.post('/new', function(req, res, next){
  request.create(req, res);
  res.render('requests/confirm', { title: 'Confirmation'});
});

router.post('/', function(req, res, next){
  res.render('requests/new', { title: 'Make a new Request', spaceId: req.body.spaceId,  userId: req.body.userId})
});


module.exports = router;
