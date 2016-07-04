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
var space = require('../../models/Space');
require('../globalBefore');

describe('Making a Request', function(){
  before(function () {
    var spaceReq =  {
      body: {
        name: "Fleeky Crib",
        description: "Mad party house, bling and bitches",
        price: "55.03",
        availablefrom: "2/03/2013",
        availableto: "12/03/2015",
        userId: "1"
      }
    };
    space.create(spaceReq);
  })

  beforeEach(function(done) {
    var browser = this.browser;
    browser.visit('/new').then(function(){
      browser.fill('email', 'zombie@underworld.dead')
      .fill('password', 'eat-the-living')
      .pressButton('Submit', function(err){
        done();
      });
    });
  });

  it('has a title and a button', function(done){
    var browser = this.browser;
    assert.ok(browser.success);

    browser.click('input.request').then(function(done){
      assert.ok(browser.success);
      assert.equal(browser.text('h2'), 'Make a new Request');
    }).then(done, done);
    });

  });
