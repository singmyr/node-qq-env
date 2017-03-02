var chai = require('chai'),
	should = chai.should(),
	expect = chai.expect,
    env = require('../index');

describe('Loading environment file', function() {
	it('Should not be able to load a file that does not exist.', function() {
		expect(function() {
			env.load('.non-existing-file');
		}).to.throw('Could not find file.');
	});
	it('Should be able to load a file that does exist.', function() {
		expect(env.load('.valid.env')).to.be.an('Object');
	});
	/*it('Should be able to load a valid file that does exist.', function() {
		expect(env.load('.valid.env')).to.be.an('Object');
	});
	it('Should be able to load an invalid file that does exist.', function() {
		expect(env.load('.invalid.env')).to.be.an('Object');
	});*/
});

/*describe('Testing retrieving environment variables', function() {
	describe('Invalid file.', function() {
		before(function() {
			env.load('.invalid.env')
		});
		it('', function() {});
	});
	describe('Valid file.', function() {
		before(function() {
			env.load('.valid.env')
		});
		it('', function() {});
	});
});*/