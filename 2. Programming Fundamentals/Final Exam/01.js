function solve(input) {
    input.pop();
    let string = input.shift();
    for (let command of input) {
        command = command.split(" ");
        if (command[0] === "Change") {
            string = string.split(command[1]).join(command[2]);
            console.log(string);

        } else if (command[0] === "Includes") {
            if (string.includes(command[1])) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command[0] === "End") {
            if (string.endsWith(command[1])) {
                console.log("True");
            } else {
                console.log("False");
            }

        } else if (command[0] === "Uppercase") {
            string = string.toUpperCase();
            console.log(string);

        } else if (command[0] === "FindIndex") {
            console.log(string.indexOf(command[1]));

        } else if (command[0] === "Cut") {
            let indexStart = Number(command[1]);
            let indexEnd = Number(command[2]);
            string = string.substr(indexStart, indexEnd);
            console.log(string);
        }
    }
}

solve([
    "//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done",
]);
