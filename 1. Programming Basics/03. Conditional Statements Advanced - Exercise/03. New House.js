function newHouse(input) {
    let flower = input[0]
    let flowerCount = Number(input[1])
    let budget = Number(input[2])
    let flowerPrice = 0

    switch (flower) {
        case "Roses": flowerPrice = 5; break;
        case "Dahlias": flowerPrice = 3.80; break;
        case "Tulips": flowerPrice = 2.80; break;
        case "Narcissus": flowerPrice = 3; break;
        case "Gladiolus": flowerPrice = 2.50; break;
    }
    let price = flowerCount * flowerPrice
    if (flower === "Roses" && flowerCount > 80) {
        price *= 0.9
    } else if ((flower === "Dahlias" && flowerCount > 90) || (flower === "Tulips" && flowerCount > 80)) {
        price *= 0.85
    } else if (flower === "Narcissus" && flowerCount < 120) {
        price *= 1.15
    } else if (flower === "Gladiolus" && flowerCount < 80) {
        price *= 1.2
    }
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Roses", "55", "250"])