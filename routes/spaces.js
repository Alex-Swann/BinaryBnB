var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('spaces/index', { title: 'Spaces' });
});
router.get('/new', function(req, res, next) {
  res.render('spaces/new', { title: 'List a new space' });
});
module.exports = router;
