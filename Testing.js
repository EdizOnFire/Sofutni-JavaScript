function solve(input) {
    let daysOfTrip = Number(input.shift());
    let budget = Number(input.shift());
    let groupPeople = Number(input.shift());
    let priceFuelKm = Number(input.shift());
    let foodPerDayPerPerson = Number(input.shift());
    let hotelPerNightPerPerson = Number(input.shift());
    let travelledDistanceKmDaily = Number(input.shift());
    let diff = 0;
    let allHotel = 0

    if (groupPeople > 10) {
        allHotel = hotelPerNightPerPerson * groupPeople * daysOfTrip * 0.75;
    } else {
        allHotel = hotelPerNightPerPerson * groupPeople * daysOfTrip;
    }

    let allFood = foodPerDayPerPerson * groupPeople * daysOfTrip;
    let currentExpenses = allFood + allHotel;
    for (let i = 1; i <= daysOfTrip; i++) {
        if (currentExpenses > budget) {
            console.log(
                `Not enough money to continue the trip. You need ${diff}$ more.`
            );
            return;
        }

        let dailyFuel = priceFuelKm * travelledDistanceKmDaily;
        currentExpenses += dailyFuel;
        if (i % 3 === 0 || i % 5 === 0) {
            currentExpenses += currentExpenses * 0.4;
        }

        if (i % 7 === 0) {
            currentExpenses -= currentExpenses / groupPeople;
        }

        travelledDistanceKmDaily = Number(input.shift());
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
