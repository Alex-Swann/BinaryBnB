var http = require("http");
var app =  require('../app');
var Browser = require('zombie');
var r = require('rethinkdb');
var rethinkdbSetup = require('rethinkdb-setup');
var thinky = require('../util/thinky.js');

before(function(done) {
	console.log("Cleaning DB...");
	thinky.r.table('users').delete().run();
	thinky.r.table('spaces').delete().run();
	this.server = http.createServer(app).listen(3000);
	this.browser = new Browser({site: 'http://localhost:3000'});
	done();
});
