function solve(input) {
    input.pop();

    let heroes = {};
    for (let line of input) {
        line = line.split(" ");
        let command = line[0];
        if (command === "Enroll") {
            let name = line[1];
            if (heroes.hasOwnProperty(name)) {
                console.log(`${name} is already enrolled.`);
            } else {
                heroes[name] = [];
            }
        } else if (command === "Learn") {
            let name = line[1];
            let spellName = line[2];

            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (heroes[name].includes(spellName)) {
                console.log(`${name} has already learnt ${spellName}.`);
            } else {
                heroes[name].push(spellName);
            }
        } else if (command === "Unlearn") {
            let name = line[1];
            let spellName = line[2];

            if (!heroes.hasOwnProperty(name)) {
                console.log(`${name} doesn't exist.`);
            } else if (!heroes[name].includes(spellName)) {
                console.log(`${name} doesn't know ${spellName}.`);
            } else {
                heroes[name].splice(spellName, 1);
            }
        }
    }
    let entries = Object.entries(heroes);
    entries.sort((a, b) => {
        let lengthA = a[1].length;
        let lengthB = b[1].length;
        if (lengthA !== lengthB) {
            return lengthB - lengthA;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    console.log("Heroes:");
    for (let hero of entries) {
        console.log(`== ${hero[0]}: ${hero[1].join(", ")}`);
    }
}

solve([
    "Enroll Stefan",
    "Enroll Peter",
    "Enroll Stefan",
    "Learn Stefan ItShouldWork",
    "Learn John ItShouldNotWork",
    "Unlearn George Dispel",
    "Unlearn Stefan ItShouldWork",
    "End",
]);
