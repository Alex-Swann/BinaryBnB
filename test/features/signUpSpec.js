var Browser = require('zombie');
var expect  = require("chai").expect;
var request = require("request");
require('../globalBefore');

Browser.localhost('localhost:', 3000);

describe('User visits signup page', function() {

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('name', 'Al')
        .fill('username', 'alex427')
        .fill('email',    'zombie@underworld.dead')
        .fill('password', 'eat-the-living')
        .pressButton('Submit', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see welcome page', function() {
      browser.assert.text('p', 'Welcome to BnB sign in Sign In Page');
    });
  });
});
