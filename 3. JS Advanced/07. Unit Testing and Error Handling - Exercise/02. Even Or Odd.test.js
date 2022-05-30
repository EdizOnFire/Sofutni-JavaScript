const isOddOrEven = require("./02. Even Or Odd.js");
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    //invalid input
    it('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    //valid input
    it('should return even as result', () => {
        assert.equal(isOddOrEven('Hi'), 'even');
    });
    it('should return odd as result', () => {
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});
