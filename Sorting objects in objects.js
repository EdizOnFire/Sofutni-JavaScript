// Sorting gold in town
let towns = {
    'Tortuga': { population: 270000, gold: 870 },
    'Santo Domingo': { population: 240000, gold: 810 },
    'Havana': { population: 410000, gold: 1100 }
};
towns = Object.entries(towns);
console.log(towns);
towns = towns.sort((a, b) => {
    if (a[1].gold === b[1].gold) {
        return a[0].localeCompare(b[0]);
    } else {
        return b[1].gold - a[1].gold;
    }
});

console.log(towns);