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
		  JSON.parse(res.json(people));
	    });

  // if(user && req.body.password === user.password){
  //   return user;
  // } else {
  //   return null;
  // }
}

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
