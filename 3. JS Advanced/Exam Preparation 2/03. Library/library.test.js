const library = require("./library.js");
const { assert, expect } = require('chai');

describe("Library function tests", () => {
    describe("Valid: Calculating a price for a book tests", () => {
        it("Should show with normal price", () => {
            assert(library.calcPriceOfBook('s', 1999) === "Price of s is 20.00")
        });
        it("Should show with normal price", () => {
            assert(library.calcPriceOfBook('s', 1980) === "Price of s is 10.00")
        });
        it("Should show with half price", () => {
            assert(library.calcPriceOfBook('s', 1979) === "Price of s is 10.00")
        });
    });
    describe("Invalid: Calculating a price for a book tests", () => {
        it("Should throw error with int and int", () => {
            expect(() => library.calcPriceOfBook(1979, 19)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with obj and int", () => {
            expect(() => library.calcPriceOfBook({}, 19)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with arr and int", () => {
            expect(() => library.calcPriceOfBook([], 19)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with null and int", () => {
            expect(() => library.calcPriceOfBook(null, 19)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with undefined and int", () => {
            expect(() => library.calcPriceOfBook(undefined, 19)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with str and str", () => {
            expect(() => library.calcPriceOfBook('s','s')).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with str and obj", () => {
            expect(() => library.calcPriceOfBook('s',{})).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with str and arr", () => {
            expect(() => library.calcPriceOfBook('s',[])).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with null and str", () => {
            expect(() => library.calcPriceOfBook(null, 's')).to.throw(Error, `Invalid input`);
        });
        it("Should throw error with undefined and str", () => {
            expect(() => library.calcPriceOfBook(undefined, 's')).to.throw(Error, `Invalid input`);
        });
    });
    describe("Valid: Finding a book tests", () => {
        it("Should find book", () => {
            assert(library.findBook(['book'], 'book') === "We found the book you want.")
        });
        it("Should not have the needed book", () => {
            assert(library.findBook(['book'], 'notABook') === "The book you are looking for is not here!")
        });
    });
    describe("Invalid: Finding a book tests", () => {
        it("Should throw error if arr length 0", () => {
            expect(() => library.findBook([], 's')).to.throw(Error, `No books currently available`);
        });
    }); 
    describe("Valid: Arranging books tests", () => {
        it("Should arrange the books", () => {
            assert(library.arrangeTheBooks(39) === "Great job, the books are arranged.")
        });
        it("Should arrange the books with exact amount", () => {
            assert(library.arrangeTheBooks(40) === "Great job, the books are arranged.")
        });
        it("Should return insufficient space", () => {
            assert(library.arrangeTheBooks(41) === "Insufficient space, more shelves need to be purchased.")
        });
    });
    describe("Invalid: Arranging books tests", () => {
        it("Should throw error if input is negative int", () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error if input is str", () => {
            expect(() => library.arrangeTheBooks('1')).to.throw(Error, `Invalid input`);
        });
        it("Should throw error if input is obj", () => {
            expect(() => library.arrangeTheBooks({})).to.throw(Error, `Invalid input`);
        });
        it("Should throw error if input is arr", () => {
            expect(() => library.arrangeTheBooks([])).to.throw(Error, `Invalid input`);
        });
        it("Should throw error if input is null", () => {
            expect(() => library.arrangeTheBooks(null)).to.throw(Error, `Invalid input`);
        });
        it("Should throw error if input is undefined", () => {
            expect(() => library.arrangeTheBooks(undefined)).to.throw(Error, `Invalid input`);
        });
    });
});
