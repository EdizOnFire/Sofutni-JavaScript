function solve(input) {
    let days = +input.shift();
    let budget = +input.shift();
    let people = +input.shift();
    let fuel = +input.shift();
    let food = +input.shift();
    let room = +input.shift();
    let traveledDistance = +input.shift();

    let currentExpenses = 0;
    let diff = 0;

    if (people > 10) {
        currentExpenses += room * people * days * 0.75;
    } else {
        currentExpenses += room * people * days;
    }

    currentExpenses += food * people * days;
    for (let i = 1; i <= days; i++) {
        if (currentExpenses > budget) {
            console.log(
                `Not enough money to continue the trip. You need ${diff}$ more.`
            );
            return;
        }

        currentExpenses += fuel * traveledDistance;
        if (i % 3 === 0 || i % 5 === 0) {
            currentExpenses += currentExpenses * 0.4;
        }

        if (i % 7 === 0) {
            currentExpenses -= currentExpenses / people;
        }

        traveledDistance = Number(input.shift());
        diff = Math.abs(budget - currentExpenses).toFixed(2);

        if (currentExpenses > budget) {
            console.log(
                `Not enough money to continue the trip. You need ${diff}$ more.`
            );
            return;
        }
    }

    console.log(
        `You have reached the destination. You have ${diff}$ budget left.`
    );
}

solve([
    "10",
    "20500",
    "11",
    "1.2",
    "8",
    "13",
    "100",
    "150",
    "500",
    "400",
    "600",
    "130",
    "300",
    "350",
    "200",
    "300",
]);
