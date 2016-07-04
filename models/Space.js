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


Space.fetch = function(req, res, route, title) {
    Space.run().then(function(spaces) {
      res.render(route, { title: title , spaces: spaces,  user: req.session.object });
    });
}

Space.fetchMine = function(req, res, route, title) {
    Space.filter({ "userId": req.session.object.id }).run().then(function(spaces) {
      res.render(route, { title: title , spaces: spaces,  user: req.session.object });
    });
}


module.exports = Space;

var User = require('./User');
var Request = require('./Request');
Space.belongsTo(User, 'user', 'userId', 'id');
Space.hasMany(Request, 'requests', 'id', 'requestId');
