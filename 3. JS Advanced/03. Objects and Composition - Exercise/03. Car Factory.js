function solve(car) {
    let carObj = {};
    carObj["model"] = car["model"];

    if (Number(car["power"]) <= 90) {
        carObj["engine"] = { power: 90, volume: 1800 };
    } else if (Number(car["power"]) <= 120) {
        carObj["engine"] = { power: 120, volume: 2400 };
    } else if (Number(car["power"]) <= 200) {
        carObj["engine"] = { power: 200, volume: 3500 };
    }

    carObj["carriage"] = { type: car["carriage"], color: car["color"] };
    if (Number(car["wheelsize"] % 2 == 0)) {
        let numberForOneWheel = Math.floor(Number(car["wheelsize"] - 1));
        carObj["wheels"] = [
            numberForOneWheel,
            numberForOneWheel,
            numberForOneWheel,
            numberForOneWheel,
        ];
    } else {
        let numberForOneWheel = Math.floor(Number(car["wheelsize"]));
        carObj["wheels"] = [
            numberForOneWheel,
            numberForOneWheel,
            numberForOneWheel,
            numberForOneWheel,
        ];
    }

    return carObj;
}

solve({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
});
