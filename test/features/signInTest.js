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


describe('Log in Feature', function() {

  before(function (done) {
    var req =  {
          body: {
            name: 'KLAX',
            username: 'alex427',
            email: 'zombie@underworld.dead',
            password: 'eat-the-living'
          }
        };

    user.create(req);
    done();
  });

  beforeEach(function (done){
    this.browser.visit('/new', done);
  });

  it('should be successful', function() {
    this.browser.assert.text('p', 'Welcome to BnB sign in Sign In Page');
  });

  describe('Log In', function(){

    before(function(done) {
      this.browser
        .fill('email',    'zombie@underworld.dead')
        .fill('password', 'eat-the-living')
        .pressButton('Submit', done);
    });

    it('sign in', function(){
      this.browser.assert.text('p', 'Welcome YourMum');
    });


  });



});
