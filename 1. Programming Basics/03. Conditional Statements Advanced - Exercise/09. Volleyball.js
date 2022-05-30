function volleyball(input) {
    let year = input[0]
    let holidays = Number(input[1])
    let hometownTrips = Number(input[2])
    let totalGames = 0

    let gamesSofia = ((48 - hometownTrips) * (3 / 4) + holidays * (2 / 3))
    let gamesHome = hometownTrips;

    totalGames = gamesSofia + gamesHome;
    if (year === 'leap') {
        totalGames *= 1.15;
    }
    console.log(Math.floor(totalGames));
}
volleyball(['leap', "2", "3"])