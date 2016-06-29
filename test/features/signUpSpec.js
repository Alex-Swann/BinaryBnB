process.env.NODE_ENV = 'test';
var app =  require('../../app');
var Browser = require('zombie');
var expect  = require("chai").expect;
var request = require("request");
var http = require("http");
require('../globalBefore');

describe('User visits signup page', function() {

  before(function (done) {

    this.browser.visit('/', done);
  });

  describe('submits form', function() {

    before(function(done) {
      this.browser
        .fill('name', 'Al')
        .fill('username', 'alex427')
        .fill('email',    'zombie@underworld.dead')
        .fill('password', 'eat-the-living')
        .pressButton('Submit', done);
    });

    it('should be successful', function() {
      this.browser.assert.success();
    });

    it('should see welcome page', function() {
      this.browser.assert.text('p', 'Welcome to BnB sign in Sign In Page');
    });
  });
});
