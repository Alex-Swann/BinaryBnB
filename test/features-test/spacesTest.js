process.env.NODE_ENV = 'test';

var app =  require('../../app')
var Browser = require('zombie');
var assert  = require("assert");
var request = require("request");
var http = require("http");

require('../globalBefore');

describe("Spaces view page", function () {
  before(function () {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({site: 'http://localhost:3000'});
  });

  beforeEach(function (done){
    this.browser.visit('/spaces', done);
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
      browser.assert.attribute('form', 'action', '/spaces/new')
    }).then(done, done);
  })

  it('submits a form', function(done) {
    var browser = this.browser;
    browser.clickLink('List a space').then( function() {
      browser.fill('name', 'Pimp cribz YO')
             .fill('description', 'Mad chill cribz YO')
             .fill('price', '22.55')
             .fill('available-from', '30/06/2016')
             .fill('available-to', '30/07/2016')
             .pressButton('List My Space', done);
      browser.assert.success();
    }).then(done, done);
  })


});
