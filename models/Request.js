/*jshint node:true */
'use strict';

var thinky = require('../util/thinky');
var r = thinky.r;
var type = thinky.type;

var Request = thinky.createModel("requests", {
  spaceId: String,
  userId: String,
  dateFrom: String,
  dateTo: String
});

Request.create = function(req, res) {
  Request.save({
    spaceId: req.body.spaceId,
    userId: req.body.userId,
    dateFrom: req.body.availablefrom,
    dateTo: req.body.availableto
  });
};


module.exports = Request;
var User = require('./User');
var Space = require('./Space');
Request.belongsTo(User, 'user', 'userId', 'id');
Request.belongsTo(Space, 'space', 'spaceId', 'id');
