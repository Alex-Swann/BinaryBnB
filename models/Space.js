'use strict';

var thinky = require('../util/thinky');
var r = thinky.r;
var type = thinky.type;

var Space = thinky.createModel("spaces", {
  name: String,
  description: String,
  price: Number,
  availablefrom: String,
  availableto: String
});

exports.create = function(req, res) {
  Space.save({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    availablefrom: req.body.availablefrom,
    availableto: req.body.availableto
  });
};

exports.fetch = function(req, res) {
  Space.run().then(function(spaces) {
    res.render('spaces/index', { title: 'Spaces', spaces: spaces });
  })

};
