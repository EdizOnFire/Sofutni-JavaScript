function solve(input) {
    let towns = {};
    let command = input.shift();
    while (command !== "Sail") {
        command = command.split("||");
        let townName = command[0];
        let population = +command[1];
        let gold = +command[2];
        if (!towns.hasOwnProperty(townName)) {
            towns[townName] = { population, gold };
        } else {
            towns[townName].population += population;
            towns[townName].gold += gold;
        }

        command = input.shift();
    }

    command = input.shift();
    while (command !== "End") {
        command = command.split("=>");
        let currentTown = command[1];
        if (command[0] === "Plunder") {
            let deaths = +command[2];
            let stolenGold = +command[3];
            console.log(`${currentTown} plundered! ${stolenGold} gold stolen, ${deaths} citizens killed.`);
            towns[currentTown].population -= deaths;
            towns[currentTown].gold -= stolenGold;
            if (towns[currentTown].population <= 0 || towns[currentTown].gold <= 0) {
                console.log(`${currentTown} has been wiped off the map!`);
                delete towns[currentTown];
            }

        } else if (command[0] === "Prosper") {
            let gainedGold = +command[2];
            if (gainedGold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                towns[currentTown].gold += gainedGold
                console.log(`${gainedGold} gold added to the city treasury. ${currentTown} now has ${towns[currentTown].gold} gold.`);
            }
        }

        command = input.shift();
    }

    towns = Object.entries(towns);
    towns = towns.sort((a, b) => {
        if (a[1].gold === b[1].gold) {
            return a[0].localeCompare(b[0]);
        }
        else {
            return b[1].gold - a[1].gold;
        }
    })
    console.log(towns);
    if (towns.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
        towns.forEach(t => console.log(`${t[0]} -> Population: ${t[1].population} citizens, Gold: ${t[1].gold} kg`));
    }
}

solve(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);