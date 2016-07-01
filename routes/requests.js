var express = require('express');
var router = express.Router();
var request = require('../models/Request');

router.get('/new', function(req, res, next){
  res.render('requests/new', { title: 'Make a new Request'});
});


module.exports = router;
