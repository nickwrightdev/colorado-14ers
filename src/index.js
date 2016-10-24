var uniqueRandomArray = require('unique-random-array');
var colorado14ers = require('./colorado-14ers.json');
var getRandomItem = uniqueRandomArray(colorado14ers);

module.exports = {
	all: colorado14ers,
	random: random14er
};

function random14er(number) {
	if (number === undefined) {
		return getRandomItem();
	}

	var randomItems = [];
	for (var i = 0; i < number; i++) {
		randomItems.push(getRandomItem());
	}
	return randomItems;
}
