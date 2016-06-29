/*jshint node:true */
'use strict';

var thinky = require('../util/thinky.js');
var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("users", {
	id: String,
	name: String,
	username: String,
	email: type.string().email(),
	password_digest: type.string().max(60)
});

//
// User.ensureIndex('id');



exports.create = function (req, res) {
	User.save({
		name: req.param('name'),
		username: req.param('username'),
		email: req.param('email'),
		password_digest: req.param('password_digest')
	});
};

// module.exports = User;

	// exports.list = function (req, res) {
		//     User.orderBy({ index: r.desc('id') }).run().then(function(people) {
			//       res.json(people);
		//     }).error(function(err) {
			//       res.json({ message: err });
		//     });
	// };
	// //

	//
	// exports.get = function (req, res) {
		//   User.get(req.params.id).run().then(function(person){
			//     res.json(person);
		//   }).error(function(err) {
			//     res.json({ message: err });
		//   });
	// };
	//
	// exports.delete = function (req, res) {
		//   User.get(req.params.id).run().then(function(person){
			//     person.delete().then(function(result){
				//       res.json(result);
			//     }).error(function(err) {
				//       res.json({ message: err });
			//     });
		//   }).error(function(err) {
			//     res.json({ message: err });
		//   });
	// };
	//
	// exports.update = function (req, res) {
		//   User.get(res.params.id).run().then(function(person){
			//     if(req.body.firstName){
				//       person.firstName = req.body.firstName;
			//     }
			//
			//     if(req.body.lastName){
				//       person.lastName = req.body.lastName;
			//     }
			//
			//     if(req.body.coolnessFactor){
				//       person.coolnessFactor = parseInt(req.body.coolnessFactor);
			//     }
			//     person.date = r.now();
			//
			//     person.save().then(function(result){
				//       res.json(result);
			//     }).error(function(err) {
				//       res.json({ message: err });
			//     });
		//   });
	// };
