const mathEnforcer = require("./04. Math Enforcer.js");
const { assert } = require('chai');

describe('mathEnforcer function tests', () => {
    describe('add five function tests', () => {
        //invalid tests
        it('Should return undefined with string', () => {
            assert(mathEnforcer.addFive('TEST') === undefined)
        })
        it('Should return undefined with object', () => {
            assert(mathEnforcer.addFive({}) === undefined)
        })
        it('Should return undefined with array', () => {
            assert(mathEnforcer.addFive([]) === undefined)
        })
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined)
        })
        it('Should return undefined with null', () => {
            assert(mathEnforcer.addFive(null) === undefined)
        })
        //correct tests
        it('Positive integer +5', () => {
            assert(mathEnforcer.addFive(5) === 10)
        })
        it('Negative integer +5', () => {
            assert(mathEnforcer.addFive(-5) === 0)
        })
        it('Decimal integer +5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5)
        })
    });
    describe('subtract ten function tests', () => {
        //invalid tests
        it('Should return undefined with string', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined)
        })
        it('Should return undefined with object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined)
        })
        it('Should return undefined with array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined)
        })
        it('Should return undefined with undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        })
        it('Should return undefined with null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined)
        })
        //correct tests
        it('Positive integer -10', () => {
            assert(mathEnforcer.subtractTen(5) === -5)
        })
        it('Negative integer -10', () => {
            assert(mathEnforcer.subtractTen(-5) === -15)
        })
        it('Decimal integer -10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5)
        })
    });
    describe('sum of two numbers function tests', () => {
        //valid tests
        it('Two positive integers', () => {
            assert(mathEnforcer.sum(10, 20) === 30);
        })
        it('Two negative integers', () => {
            assert(mathEnforcer.sum(-10, -20) === -30);
        })
        it('Two decimal integers', () => {
            assert(mathEnforcer.sum(10.5, 20.1) === 30.6);
        })
        //invalid tests
        it('First param string, second int', () => {
            assert(mathEnforcer.sum('10', 20) === undefined);
        })
        it('First param int, second string', () => {
            assert(mathEnforcer.sum(10, '20') === undefined);
        })
    });
});
