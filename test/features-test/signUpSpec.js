var expect  = require("chai").expect;
var request = require("request");
var chai = require('chai');
var chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('../globalBefore');

describe('User', function(){
  var user;

  beforeEach(function(){
      user = new User();
  });

  it('should save a new user', function(){

  });

});
