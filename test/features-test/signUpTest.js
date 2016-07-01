process.env.NODE_ENV = 'test';
var app =  require('../../app');
var Browser = require('zombie');
var expect  = require("chai").expect;
var thinky = require('../../util/thinky.js');
var r = thinky.r;
var type = thinky.type;
var request = require("request");
var http = require("http");
var user = require('../../models/User');
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
        .fill('email',    'human@daworld.dead')
        .fill('password', 'eat-the-living')
        .pressButton('Submit', done);
    });

    it('should be successful', function() {
      this.browser.assert.success();
    });

    it('should see welcome page', function() {
      this.browser.assert.text('p', 'Welcome to BnB sign in Sign In Page');
    });

    it('adds a user to the database', function() {
      setTimeout( function () {
        thinky.r.db('BnB_test').table('users').count().run().then(function (result) {
          expect(result).to.eq(2);
        });
      }, 100 );
    });
  });

});
