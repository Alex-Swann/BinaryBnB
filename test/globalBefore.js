var r = require('rethinkdb');
var rethinkdbSetup = require('rethinkdb-setup');
var thinky = require('../util/thinky.js');

before(function(done) {
	console.log("Cleaning DB...");
	thinky.r.table('users').delete().run();
	thinky.r.table('spaces').delete().run();
	done();
});
