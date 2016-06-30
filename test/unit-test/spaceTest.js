var expect  = require("chai").expect;
var thinky = require('../../util/thinky');
var r = thinky.r;
var type = thinky.type;
var space = require("../../models/Space");
require('../globalBefore');

describe("Space Unit test", function() {

	it("add to the database", function(done) {
		var req = {
			body: {
				name: "Dave's crib",
		    description: "Lad pad",
		    price: "130.03",
		    availablefrom: "12/03/2013",
		    availableto: "12/03/2015"
			}
		};

		space.create(req);

		setTimeout( function () {
			thinky.r.db('BnB_test').table('spaces').count().run().then(function (result) {
				expect(result).to.eq(2);
			});
		}, 100 );
		done();
	});

});
