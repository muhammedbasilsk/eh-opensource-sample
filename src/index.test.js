var expect = require('chai').expect;
var starWars = require('./index');
describe('starWars', function() {
    describe('All', function() {
    	it('should be an array of names', function() {
    		expect(starWars.all).to.satisfy(isArrayOfStrings);
    		function isArrayOfStrings(array){
    			return array.every(function(item){
    				return typeof item === 'string';
    			})
    		}
    	});

    	it('should include Muhammed Basil', function(){
    		expect(starWars.all).to.include('Muhammed Basil');
    	})
    });

    describe('Random', function(){
    	it('should return a value from starWars.all', function(){
    		var randomItem = starWars.random();
    		expect(starWars.all).to.include(randomItem);
    	})
    })
});
