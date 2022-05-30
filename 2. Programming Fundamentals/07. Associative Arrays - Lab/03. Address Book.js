function solve(input) {
    let addresses = {};
    for (let line of input) {
        let [name, address] = line.split(":");
        addresses[name] = address;
    }

    addresses = Object.keys(addresses)
        .sort()
        .reduce((obj, key) => {
            obj[key] = addresses[key];
            return obj;
        }, {});

    for (let key in addresses) {
        console.log(`${key} -> ${addresses[key]}`);
    }
}

solve(["Tim:Doe Crossing",
    "Bill:Nelson Place",
    "Peter:Carlyle Ave",
    "Bill:Ornery Rd",]);
