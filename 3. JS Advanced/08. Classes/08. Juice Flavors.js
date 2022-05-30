function solve(array) {
    let storage = {};
    let bottles = {};
    for (let line of array) {
        let [name, quantity] = line.split(" => ");
        if (!storage.hasOwnProperty(name)) {
            storage[name] = 0;
        }
        storage[name] += Number(quantity);
        if (storage[name] >= 1000) {
            bottles[name] = Math.floor(storage[name] / 1000);
        }
    }
    Object.entries(bottles).forEach((element) => {
        console.log(`${element[0]} => ${element[1]}`);
    });
}

solve([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]",
]);
