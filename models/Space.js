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
    name: req.param.name,
    description: req.param.description,
    price: req.param.price,
    availablefrom: req.param.availablefrom,
    availableto: req.param.availablet
  })
}
