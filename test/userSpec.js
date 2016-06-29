var Browser = require('zombie');
var expect  = require("chai").expect;
var request = require("request");
require('./globalBefore');
var user = require('../models/User');

Browser.localhost('localhost:', 3000);

describe('User', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  before(function(done) {
      browser
        .fill('name', 'Al')
        .fill('username', 'alex427')
        .fill('email',    'zombie@underworld.dead')
        .fill('password', 'eat-the-living')
        .pressButton('Submit', done);
  });


  it('should save a new user', function(){
    
  });

});
