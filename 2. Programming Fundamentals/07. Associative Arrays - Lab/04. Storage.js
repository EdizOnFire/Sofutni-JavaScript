function solve(input) {
    let map = new Map();

    for (let string of input) {
        let [product, quantity] = string.split(" ")
        quantity = +quantity

        if (!map.has(product)) {
            map.set(product, quantity);
        } else {
            let currQuantity = map.get(product) + quantity;
            map.set(product, currQuantity);
        }
    }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])