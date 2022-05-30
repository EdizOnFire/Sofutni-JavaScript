function store(input) {
    let fruit = input[0]
    let weekDay = input[1]
    let quantity = Number(input[2])

    let weekDayType
    let price

    switch (weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': weekDayType = 'Working Day'; break;
        case 'Saturday':
        case 'Sunday': weekDayType = 'Weekend'; break;
        default: console.log('error'); break;
    }
    if (fruit === 'banana') {
        if (weekDayType === 'Working Day') {
            price = 2.50
        } else if (weekDayType === 'Weekend') {
            price = 2.70
        }
    } else if (fruit === 'apple') {
        if (weekDayType === 'Working Day') {
            price = 1.20
        } else if (weekDayType === 'Weekend') {
            price = 1.25
        }
    } else if (fruit === 'orange') {
        if (weekDayType === 'Working Day') {
            price = 0.85
        } else if (weekDayType === 'Weekend') {
            price = 0.9
        }
    } else if (fruit === 'grapefruit') {
        if (weekDayType === 'Working Day') {
            price = 1.45
        } else if (weekDayType === 'Weekend') {
            price = 1.60
        }
    } else if (fruit === 'kiwi') {
        if (weekDayType === 'Working Day') {
            price = 2.70
        } else if (weekDayType === 'Weekend') {
            price = 3.00
        }
    } else if (fruit === 'pineapple') {
        if (weekDayType === 'Working Day') {
            price = 5.50
        } else if (weekDayType === 'Weekend') {
            price = 5.60
        }
    } else if (fruit === 'grapes') {
        if (weekDayType === 'Working Day') {
            price = 3.85
        } else if (weekDayType === 'Weekend') {
            price = 4.20
        }
    }
    let sum = (price * quantity).toFixed(2)
    switch (weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
        case 'Sunday': switch (fruit) {
            case 'banana':
            case 'apple':
            case 'orange':
            case 'grapefruit':
            case 'kiwi':
            case 'pineapple':
            case 'grapes': console.log(sum); break;
            default: console.log('error'); break;
        } break;
    }
}
store(["apple", "Monday", "2"])