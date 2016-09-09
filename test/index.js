var chai = require('chai'),
	fs = require('fs'),
	expect = chai.expect,
	index = require('../index');


describe('parser', function() {
	it('parser tpl into js', function() {
		index.parse('test/input.html')
		expect(fs.existsSync('test/input.html.js')).to.equal(true);
		index.parse('test/iframe.html')
		index.parse('test/index.html')
		expect(fs.existsSync('test/iframe.html.js')).to.equal(true);
	});
});