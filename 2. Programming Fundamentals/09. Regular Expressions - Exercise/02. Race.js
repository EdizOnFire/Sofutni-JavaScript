function solve(input) {
    let namePattern = /[A-Za-z]/g;
    let numPattern = /\d/g;
    let names = input.shift().split(", ");
    let command = input.shift();
    let racers = {};
    for (let name of names) {
        racers[name] = 0;
    }

    while (command !== "end of race") {
        let name = command.match(namePattern).join("");
        let racerDistance = command.match(numPattern).map((n) => +n);
        racerDistance = racerDistance.reduce((a, b) => a + b, 0);
        if (racers[name] != undefined) {
            racers[name] += racerDistance;
        }

        command = input.shift(input);
    }

    let result = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${result.shift()[0]}`);
    console.log(`2nd place: ${result.shift()[0]}`);
    console.log(`3rd place: ${result.shift()[0]}`);
}

solve([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
