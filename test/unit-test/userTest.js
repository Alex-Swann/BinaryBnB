var expect  = require("chai").expect;
var thinky = require('../../util/thinky.js');
var r = thinky.r;
var type = thinky.type;
var user = require('../../models/User');

require('../globalBefore');




describe('User', function(){
  
    it('should save a new user', function(done){
      var req =  {
            body: {
              name: 'YourMum',
              username: 'alex427',
              email: 'zombie@underworld.dead',
              password: 'eat-the-living'
            }
          };

      user.create(req);
      setTimeout( function () {
  			thinky.r.db('BnB_test').table('users').count().run().then(function (result) {
  				expect(result).to.eq(1);
  			});
  		}, 100 );
      done();
    });
});
