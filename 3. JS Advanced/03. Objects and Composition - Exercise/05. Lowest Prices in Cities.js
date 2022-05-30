function solve(data) {
    const products = [];

    for (const element of data) {
        let [town, product, price] = element.split(" | ");
        price = Number(price);
        if (!products.includes(product)) {
            products.push(product, []);
        }
        const index = products.indexOf(product);
        products[index + 1].push([town, price]);
    }

    const end = products.length;

    for (let i = 0; i < end; i += 2) {
        const product = products[i];
        const vendors = products[i + 1];
        vendors.sort((a, b) => a[1] - b[1]);

        const cheapestVendor = vendors[0];
        const location = cheapestVendor[0];
        const price = cheapestVendor[1];

        console.log(`${product} -> ${price} (${location})`);
    }
}

solve([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
