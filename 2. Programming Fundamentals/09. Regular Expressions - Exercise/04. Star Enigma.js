function solve(input) {
    input.shift();
    let counterPattern = /[s,t,a,r]/i;
    let decoder = /@(?<ship>[A-Za-z]+)[^@\-!\:>]*?:(?<population>\d+)[^@\-!\:>]*?!(?<attackType>A|D)![^@\-!\:>]*?->(?<soldierCount>\d+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let command of input) {
        let counter = 0;
        for (let str of command.split("")) {
            let match = counterPattern.exec(str);
            if (match !== null) {
                counter++;
            }
        }

        let newCommand = "";
        for (let str of command.split("")) {
            let codeAt = str.charCodeAt() - counter;
            let newStr = String.fromCharCode(codeAt);
            newCommand += `${newStr}`;
        }

        let match = decoder.exec(newCommand);
        if (match !== null) {
            let ship = match.groups["ship"];
            let attackType = match.groups["attackType"];
            if (attackType === "A") {
                attackedPlanets.push(ship);
            } else if (attackType === "D") {
                destroyedPlanets.push(ship);
            }
        }
    }

    attackedPlanets = attackedPlanets.sort();
    destroyedPlanets = destroyedPlanets.sort();
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach((p) => console.log(`-> ${p}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach((p) => console.log(`-> ${p}`));
}

solve(["2", "STCDoghudd4=63333$D$0A53333", "EHfsytsnhf?8555&I&2C9555SR"]);
