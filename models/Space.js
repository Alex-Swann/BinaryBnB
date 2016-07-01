/* jshint node: true */
'use strict';

var thinky = require('../util/thinky');
var r = thinky.r;
var type = thinky.type;

var Space = thinky.createModel("spaces", {
  name: String,
  description: String,
  price: Number,
  availablefrom: String,
  availableto: String,
  userId: String
});


Space.create = function(req, res) {
  Space.save({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availablefrom: req.body.availablefrom,
    availableto: req.body.availableto,
    userId: req.body.userId
  });
};

Space.fetch = function(req, res) {
  Space.run().then(function(spaces) {
    res.render('spaces/index', { title: 'Spaces', spaces: spaces,  user: req.session.object });
  });

};

exports.get = function(req, res) {
  Space.run().then(function(spaces) {
    res.render('requests/new', { title: 'Requests', spaces: spaces,  user: req.session.object });
  });

};

module.exports = Space;

var User = require('./User');

Space.belongsTo(User, 'user', 'userId', 'id');