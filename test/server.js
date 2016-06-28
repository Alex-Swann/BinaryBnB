var expect  = require("chai").expect;
var request = require("request");

require('./globalBefore');

describe("Binary BnB", function() {

  describe("There is a server", function() {

    var url = "http://localhost:3000/";

    it("returns status 200", function() {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
      });
    });

  });

});
