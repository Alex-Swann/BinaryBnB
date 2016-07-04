var express = require('express');
var router = express.Router();
var space = require('../models/Space');


router.get('/', function(req, res, next) {
  space.fetch(req, res, 'spaces/index', 'Spaces');
});

router.get('/new', function(req, res, next) {
  space.fetch(req, res, 'spaces/new', 'List a new space');
});

router.post('/new', function(req, res, next) {
  space.create(req, res);
  res.redirect('/spaces');
});

router.get('/mySpaces', function(req, res, next) {
  space.fetchMine(req, res, 'spaces/mySpaces', 'MySpaces');
});



module.exports = router;
