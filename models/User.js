/*jshint node:true */
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


exports.create = function (req, res) {
	User.save({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
};

exports.authenticate = function (req, res) {
  	User.filter({ "email": req.body.email }).run().then(function(people) {
			for (var i = 0; i < people.length; i++) {
				if (people[i].password === req.body.password) {
					res.currentUser = people[i];
          req.session.object = res.currentUser
          res.redirect('/spaces');
				}
			}
		});
};
