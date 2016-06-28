var r = require('rethinkdb');
var rethinkdbSetup = require('rethinkdb-setup');
var thinky = require('../util/thinky.js');

before(function(done) {
  console.log("Cleaning DB...");
  console.log("\t"+thinky.r.table('users').delete().run());
  done();
})