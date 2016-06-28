var webdriver = require('selenium-webdriver'),
	chrome = require('selenium-webdriver/chrome'),
	By = webdriver.By,
	until = webdriver.until;

var expect  = require("chai").expect;
var driver = new webdriver.Builder().forBrowser('firefox').build();


describe('Feature test!', function () {
	it('Has a title', function(done){
		driver.get('/');
		var h1 = driver.findElement({id: 'title'});
		h1.getText().then(function(text) {
			expect(text).to.eventually.equal('Binary BnB');
		});
		done();
	});
});

