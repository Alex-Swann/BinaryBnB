var Config = require('../config'), conf = new Config();

var thinky = require('thinky')({
	host: conf.host,
	port: conf.port,
	db: conf.db
});

module.exports = thinky;
