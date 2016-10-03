var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names');

var _getRandomNumber = uniqueRandomArray(starWarsNames);

function random(count) {
    if (typeof count == 'undefined') {
        return _getRandomNumber();
    }else if(count > starWarsNames.length){
    	return [];
    }
    var randomItems = [];
    for (var i = 0; i < count; i++) {
        randomItems.push(_getRandomNumber());
    }
    return randomItems;
}
/*Adding commit*/
module.exports = {
    all: starWarsNames,
    random: random
};
