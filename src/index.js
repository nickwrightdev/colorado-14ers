var uniqueRandomArray = require('unique-random-array');
var colorado14ers = require('./colorado-14ers.json');

module.exports = {
	all: colorado14ers,
	random: uniqueRandomArray(colorado14ers)
};
