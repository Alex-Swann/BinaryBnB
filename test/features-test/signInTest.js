process.env.NODE_ENV = 'test';
var app =  require('../../app');
var Browser = require('zombie');
var chai = require('chai');
var expect  = require("chai").expect;
var thinky = require('../../util/thinky.js');
var r = thinky.r;
var type = thinky.type;
var request = require("request");
var http = require("http");
var user = require('../../models/User');
require('../globalBefore');


describe('When logged in', function() {

  before(function (done){
    this.browser.visit('/new', done);
  });

  beforeEach(function(done) {
    this.browser
      .fill('email',    'zombie@underworld.dead')
      .fill('password', 'eat-the-living')
      .pressButton('Submit', done);
  });

  it('displays name', function(){
    this.browser.assert.text('#welcomeUser', 'Welcome KLAX');
    this.browser.assert.element('form');
    this.browser.assert.element('#SignOut');
  });

  it
});

describe('When logged out', function(){

  before(function (done){
    this.browser.pressButton('#SignOut', function(err){
      done();
    });
  });

  it('does not display name', function(done){
    expect(this.browser.query("#welcomeUser")).not.to.exist;
    expect(this.browser.query("a.button")).not.to.exist;
    done();
  });
});