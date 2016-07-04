process.env.NODE_ENV = 'test';

var app =  require('../../app');
var Browser = require('zombie');
var assert  = require("assert");
var request = require("request");
var http = require("http");
var thinky = require('../../util/thinky.js');

require('../globalBefore');

describe("Spaces view page", function () {

  beforeEach(function (done){
    var browser = this.browser;
    browser.visit('/new').then(function(){
      browser.fill('email', 'zombie@underworld.dead')
      .fill('password', 'eat-the-living')
      .pressButton('Submit', function(err){
        done();
      });
    });
  });

  it('has a title and a button', function () {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('h2'), "Spaces");
    assert.equal(this.browser.text('a.button'), 'List a space');
  });

  it('navigates to add a new space', function (done) {
    var browser = this.browser;
    browser.clickLink('List a space').then(function () {
      assert.ok(browser.success);
      assert.equal(browser.text('h2'), "List a new space");
    }).then(done, done);
    });

    it('has a form', function(done) {
      var browser = this.browser;
      browser.clickLink('List a space').then( function () {
        browser.assert.attribute('form#newSpace', 'action', '/spaces/new');
      }).then(done, done);
      });

      it('submits a form', function(done) {
        thinky.r.table('spaces').delete().run();    var browser = this.browser;
        browser.clickLink('List a space').then( function() {
          browser.fill('name', 'Pimp cribz YO')
          .fill('description', 'Mad chill cribz YO')
          .fill('price', '22.53')
          .fill('availablefrom', '30/06/2016')
          .fill('availableto', '30/07/2016')
          .pressButton('List My Space', function(err){
            assert.ok(browser.success);
          });
        }).then(done, done);
        });

        it('lists spaces', function() {
          assert.ok(this.browser.success);
          assert.equal(this.browser.text('#spaces li:nth-child(1) h4'), 'Pimp cribz YO');
          assert.equal(this.browser.text('#spaces li:nth-child(1) ul li:nth-child(1) span'), '22.53');
          assert.equal(this.browser.text('#spaces li:nth-child(1) ul li:nth-child(2) span'), 'Mad chill cribz YO');
          assert.equal(this.browser.text('#spaces li:nth-child(1) ul li:nth-child(3) span.availablefrom'), '30/06/2016');
          assert.equal(this.browser.text('#spaces li:nth-child(1) ul li:nth-child(3) span.availableto'), '30/07/2016');
        })

      });