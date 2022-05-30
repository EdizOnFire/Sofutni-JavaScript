function solve(input) {
    let regEx =
        /(?<name>%[A-Z][a-z]+%).*?(?<product><\w+>).*?(?<count>\|[\d]+\|).*?(?<price>\d+(?:\.?\d+)?\$)/;
    input.pop();
    let sum = 0;
    for (let command of input) {
        let match = regEx.exec(command);
        if (match !== null) {
            let name = match.groups["name"];
            name = name.slice(1, name.length - 1);
            let product = match.groups["product"];
            product = product.slice(1, product.length - 1);
            let count = match.groups["count"];
            count = +count.slice(1, count.length - 1);
            let price = match.groups["price"];
            price = +price.slice(0, price.length - 1);
            let currentPrice = price * count;
            sum += currentPrice;
            console.log(`${name}: ${product} - ${currentPrice.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${sum.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
