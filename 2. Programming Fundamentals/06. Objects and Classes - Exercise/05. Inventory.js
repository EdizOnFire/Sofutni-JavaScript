function solve(arr) {
    let heroes = [];

    for (let hero of arr) {
        let tokens = hero.split(" / ");
        let heroName = tokens.shift();
        let heroLevel = +tokens.shift();
        let items = (tokens[0].split(', ')).sort();
        items = items.join(', ');
        heroes.push({ heroName, heroLevel, items });
    }

    heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    heroes.forEach(h => {
        console.log(`Hero: ${h.heroName}`);
        console.log(`level => ${h.heroLevel}`);
        console.log(`items => ${h.items}`);});
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
    