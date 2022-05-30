function shop(input) {
    let product = input[0]
    let town = input[1]
    let quantity = Number(input[2])

    let price = 0

    if (product === 'coffee') {
        if (town === 'Plovdiv') {
            price = 0.4
        } else if (town === 'Varna') {
            price = 0.45
        } else {
            price = 0.5
        }
    } else if (product === 'water') {
        if (town === 'Plovdiv') {
            price = 0.7
        } else if (town === 'Varna') {
            price = 0.7
        } else {
            price = 0.8
        }
    } else if (product === 'beer') {
        if (town === 'Plovdiv') {
            price = 1.15
        } else if (town === 'Varna') {
            price = 1.1
        } else {
            price = 1.2
        }
    } else if (product === 'sweets') {
        if (town === 'Plovdiv') {
            price = 1.3
        } else if (town === 'Varna') {
            price = 1.35
        } else {
            price = 1.45
        }
    } else {
        if (town === 'Plovdiv') {
            price = 1.5
        } else if (town === 'Varna') {
            price = 1.55
        } else {
            price = 1.60
        }
    }
    console.log(price * quantity);
}
shop(['coffee', 'Varna', '2'])