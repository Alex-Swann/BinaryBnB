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
});