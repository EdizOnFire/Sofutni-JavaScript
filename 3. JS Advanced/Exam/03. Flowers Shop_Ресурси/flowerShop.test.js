let flowerShop = require('../flowerShop')
let assert = require('chai').assert

describe("Test the functionality of 'flowerShop'", () =>{

    describe("Test functionality of 'calcPriceOfFlowers'",() =>{

        it("Should return the multiples of 'price' and 'quantity'", () =>{

            let expected =  'You need $25.00 to buy popy!'
            let actual = flowerShop.calcPriceOfFlowers('popy',5,5);

            assert.equal(actual,expected);
    
        });
        it("Should throw an error in case of Invalid inputs", () =>{

            assert.throws(() => flowerShop.calcPriceOfFlowers(5,"5",10));

        });
        it("Should round the restult to the second digit after decimal point", () =>{

    
            let expected =  'You need $30 to buy popy!'
            let actual = flowerShop.calcPriceOfFlowers('popy',5,6);

            assert.notEqual(actual,expected);
    
        });

    });
    describe("Test functionality of 'checkFlowersAvailable'",() =>{

        it("Should check if the submited flower is present in the array", () =>{

            let expected =  'The Roses are available!'
            let actual = flowerShop.checkFlowersAvailable('Roses',['Roses','Lilys','Orchids']);

            assert.equal(actual,expected);
    
        });
        it("Should return 'The Roses are available!' if the submited string is present in the array", () =>{

            let expected =  'The Roses are available!'
            let actual = flowerShop.checkFlowersAvailable('Roses',['Roses','Lilys','Orchids']);

            assert.equal(actual,expected);
    
        });
        it("Should return 'The Roses are sold! You need to purchase more!' if the submited string is not in the array", () =>{

            let expected =  'The Roses are sold! You need to purchase more!'
            let actual = flowerShop.checkFlowersAvailable('Roses',['Popys','Lilys','Orchids']);

            assert.equal(actual,expected);
    
        });


    });
    describe("Test functionality of 'sellFlowers'",() =>{

        it("Should throw an error in case of Invalid inputs", () =>{


            assert.throws(() => flowerShop.sellFlowers(['Roses','Lilys','Orchids'], 3));
    
        });
        it("Should return the changed array of flowers as string joined by ' / '", () =>{


            let expected = 'Roses / Lilys'
            let actual = flowerShop.sellFlowers(['Roses','Lilys','Orchids'], 2);

            assert.equal(actual,expected);
    
        });
        
    });


});