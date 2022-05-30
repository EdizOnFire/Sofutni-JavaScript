function solve(input) {
    let cars = []
    for (let element of input) {
        let [direction, car] = element.split(', ')
        if (direction === 'IN') {
            if (!cars.includes(car)) {
                cars.push(car);
            }
        } else if (direction === 'OUT') {
            if (cars.includes(car)) {
                let index = cars.indexOf(car)
                cars.splice(index, 1)
            }
        }
    }

    cars.sort()
    if (cars.length > 0) {
        for (let element of cars) {
            console.log(element);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])