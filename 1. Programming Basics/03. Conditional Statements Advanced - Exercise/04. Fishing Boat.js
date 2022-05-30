function fishingBoat(input) {
    let budget = Number(input[0])
    let season = input[1]
    let fishermen = Number(input[2])
    let shipPrice = 0

    if (season === 'Spring') {
        shipPrice = 3000
    } else if ((season === 'Summer') || (season === 'Autumn')) {
        shipPrice = 4200
    } else if (season === 'Winter') {
        shipPrice = 2600
    }
    if (fishermen <= 6) {
        shipPrice *= 0.9
    } else if ((fishermen >= 7) && (fishermen <= 11)) {
        shipPrice *= 0.85
    } else if (fishermen >= 12) {
        shipPrice *= 0.75
    }
    if (fishermen % 2 == 0 && season !== 'Autumn') {
        shipPrice *= 0.95
    }
    if (budget >= shipPrice) {
        console.log(`Yes! You have ${(budget - shipPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(shipPrice - budget).toFixed(2)} leva.`);
    }
}
fishingBoat(["3000", 'Summer', "11"])