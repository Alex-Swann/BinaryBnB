'use strict';

var thinky = require('../util/thinky');
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("users", {
	name: String,
	username: String,
	email: type.string().email(),
	password: type.string().max(60)
});


User.create = function (req, res) {
	User.save({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
};

User.authenticate = function (req, res) {
  	User.filter({ "email": req.body.email }).run().then(function(people) {
				if (people[0].password === req.body.password) {
          req.session.object = people[0];
          res.redirect('/spaces');
				}
		});
};

module.exports = User;

var Space = require('./Space');
var Request = require('./Request');

User.hasMany(Space, 'spaces', 'id', 'userId');
User.hasMany(Request, 'requests', 'id', 'requestId');
