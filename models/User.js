/*jshint node:true */
'use strict';


var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'BnB_test'
});

var r = thinky.r;
var type   = thinky.type;

var User = thinky.createModel("User", {
  id: String,
  name: String,
  username: String,
  email: type.string().email(),
  password_digest: type.string().max(60)
});


User.ensureIndex('date');

exports.list = function (req, res) {
    User.orderBy({ index: r.desc('date') }).run().then(function(people) {
      res.json(people);
    }).error(function(err) {
      res.json({ message: err });
    });
};

exports.add = function (req, res) {
  var person = new User(req.body);

  person.save().then(function(result){
    res.json(result);
  }).error(function(err) {
    res.json({ message: err });
  });
};

exports.get = function (req, res) {
  User.get(req.params.id).run().then(function(person){
    res.json(person);
  }).error(function(err) {
    res.json({ message: err });
  });
};

exports.delete = function (req, res) {
  User.get(req.params.id).run().then(function(person){
    person.delete().then(function(result){
      res.json(result);
    }).error(function(err) {
      res.json({ message: err });
    });
  }).error(function(err) {
    res.json({ message: err });
  });
};

exports.update = function (req, res) {
  User.get(res.params.id).run().then(function(person){
    if(req.body.firstName){
      person.firstName = req.body.firstName;
    }

    if(req.body.lastName){
      person.lastName = req.body.lastName;
    }

    if(req.body.coolnessFactor){
      person.coolnessFactor = parseInt(req.body.coolnessFactor);
    }
    person.date = r.now();

    person.save().then(function(result){
      res.json(result);
    }).error(function(err) {
      res.json({ message: err });
    });
  });
};
