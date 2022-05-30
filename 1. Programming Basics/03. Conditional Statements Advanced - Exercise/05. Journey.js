function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let location = 0;
    let price = 0
    if (budget <= 100) {
        location = 'Bulgaria';
        if (season === 'summer') {
            price = budget * 0.7
        } else if (season === 'winter') {
            price = budget * 0.3
        }
    } else if (budget <= 1000) {
        location = 'Balkans';
        if (season === 'summer') {
            price = budget * 0.6
        } else if (season === 'winter') {
            price = budget * 0.2
        }
    } else if (budget > 1000) {
        location = 'Europe';
        price = budget * 0.1;
    }
    let type = 0
    if ((season === 'summer') && (location !== 'Europe')) {
        type = 'Camp'
    } else if ((season === 'winter') || (location === 'Europe')) {
        type = 'Hotel'
    }
    console.log(`Somewhere in ${location}`);
    console.log(`${type} - ${(budget - price).toFixed(2)}`);
}
journey(["1500", 'summer']);