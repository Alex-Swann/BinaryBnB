var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Binary BnB' });
});

router.post('/', function(req, res, next){
  var user = new User({
    name: req.params('name'),
    username: req.params('username'),
    email: req.params('email'),
    password_digest: req.params('password_digest')
  });

  post.saveAll().then(function(result) {
  });
  res.redirect('/new');
});

router.get('/new', function(req,res,next){
  res.render('signIn', {title: 'BnB sign in'});
});

module.exports = router;
