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
    	});

    	it('should return an array of items if passed number', function(){
    		var randomItem = starWars.random(3);
    		expect(randomItem).to.have.length(3);
    		randomItem.forEach(function(item){
    			expect(starWars.all).to.include(item);
    		});
    	})

    	it('should return an empty array if the number passed is more than the array size', function(){
    		var countToBeGet = starWars.all.length+20;
    		var randomItems = starWars.random(countToBeGet)
    		expect(randomItems).to.have.length(0);
    	})
    })
});
