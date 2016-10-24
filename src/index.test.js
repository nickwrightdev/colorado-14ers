import {expect} from 'chai';
import colorado14ers from './index';

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

        it('should return an array of random items if passed a number', function () {
            var randomItems = colorado14ers.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function (item) {
               expect(colorado14ers.all).to.include(item);
            });
        });
    });
});