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

  before(function (done){
    this.browser.visit('/new', done);
  });

  beforeEach(function(done) {
    this.browser
      .fill('email',    'zombie@underworld.dead')
      .fill('password', 'eat-the-living')
      .pressButton('Submit', done);
  });

  it('sign in', function(){
    this.browser.assert.text('p', 'Welcome KLAX');
  });


});
