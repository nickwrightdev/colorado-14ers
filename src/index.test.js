var expect = require('chai').expect;
var colorado14ers = require('./index');

describe('colorado-14ers', function () {
   describe('all', function () {
      it('should be an array of strings', function () {
          expect(colorado14ers.all).to.satisfy(isArrayOfStrings);

          function isArrayOfStrings (array) {
              return array.every(function(item) {
                 return typeof item === 'string';
              });
          }
      });

       it('should contain Pikes Peak', function () {
          expect(colorado14ers.all).to.include('Pikes Peak');
       });
   });

    describe('random', function () {
       it('should return a random item from all', function () {
            var randomItem = colorado14ers.random();
           expect(colorado14ers.all).to.include(randomItem);
       });
    });
});