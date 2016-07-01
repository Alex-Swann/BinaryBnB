process.env.NODE_ENV = 'test';
var app =  require('../../app');
var Browser = require('zombie');
var chai = require('chai');
var expect  = require("chai").expect;
var assert = require('assert');
var thinky = require('../../util/thinky.js');
var r = thinky.r;
var type = thinky.type;
var request = require("request");
var http = require("http");
var user = require('../../models/User');
require('../globalBefore');

describe('Making a Request', function(){

  before(function(done){
    var browser = this.browser;
    this.browser.visit('/new', done);
  });

  beforeEach(function(done) {
    var browser = this.browser;
    this.browser
      .fill('email',    'zombie@underworld.dead')
      .fill('password', 'eat-the-living')
      .pressButton('Submit', done);
  });

  it('has a title and a button', function(){
    var browser = this.browser;
    assert.ok(browser.success);
    assert.equal(browser.text('a.button#request'), 'Make a Request');
  });

  it('navigates to making a request', function(done){
    var browser = this.browser;
    browser.clickLink('Make a Request').then(function(){
      assert.ok(browser.success);
      assert.equal(browser.text('h2'), 'Make a new Request');
    }).then(done, done);
  });

});
