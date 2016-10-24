import uniqueRandomArray from 'unique-random-array';
import colorado14ers from './colorado-14ers.json';

const getRandomItem = uniqueRandomArray(colorado14ers);

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
