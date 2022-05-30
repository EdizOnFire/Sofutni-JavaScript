function solve(params) {
    let distanceInMeters = params
    let distanceInKilometers = distanceInMeters / 1000
    console.log(distanceInKilometers.toFixed(2));
}

solve(1852)