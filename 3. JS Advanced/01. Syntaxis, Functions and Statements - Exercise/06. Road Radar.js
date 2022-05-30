function solve(currentSpeed, area) {
    if (area === 'motorway') {
        if (currentSpeed > 130) {
            if (currentSpeed - 130 <= 20) {
                console.log(`The speed is ${currentSpeed - 130} km/h faster than the allowed speed of 130 - speeding`)
            } else if (currentSpeed - 130 <= 40 && currentSpeed - 130 > 20) {
                console.log(`The speed is ${currentSpeed - 130} km/h faster than the allowed speed of 130 - excessive speeding`)
            } else {
                console.log(`The speed is ${currentSpeed - 130} km/h faster than the allowed speed of 130 - reckless driving`)
            }

        } else {
            console.log(`Driving ${currentSpeed} km/h in a 130 zone`);
        }

    } else if (area === 'interstate') {
        if (currentSpeed > 90) {
            if (currentSpeed - 90 <= 20) {
                console.log(`The speed is ${currentSpeed - 90} km/h faster than the allowed speed of 90 - speeding`)
            } else if (currentSpeed - 90 <= 40 && currentSpeed - 90 > 20) {
                console.log(`The speed is ${currentSpeed - 90} km/h faster than the allowed speed of 90 - excessive speeding`)
            } else {
                console.log(`The speed is ${currentSpeed - 90} km/h faster than the allowed speed of 90 - reckless driving`)
            }

        } else {
            console.log(`Driving ${currentSpeed} km/h in a 90 zone`);
        }

    } else if (area === 'city') {
        if (currentSpeed > 50) {
            if (currentSpeed - 50 <= 20) {
                console.log(`The speed is ${currentSpeed - 50} km/h faster than the allowed speed of 50 - speeding`)
            } else if (currentSpeed - 50 <= 40 && currentSpeed - 50 > 20) {
                console.log(`The speed is ${currentSpeed - 50} km/h faster than the allowed speed of 50 - excessive speeding`)
            } else {
                console.log(`The speed is ${currentSpeed - 50} km/h faster than the allowed speed of 50 - reckless driving`)
            }

        } else {
            console.log(`Driving ${currentSpeed} km/h in a 50 zone`);
        }

    } else if (area === 'residential') {
        if (currentSpeed > 20) {
            if (currentSpeed - 20 <= 20) {
                console.log(`The speed is ${currentSpeed - 20} km/h faster than the allowed speed of 20 - speeding`)
            } else if (currentSpeed - 20 <= 40 && currentSpeed - 20 > 20) {
                console.log(`The speed is ${currentSpeed - 20} km/h faster than the allowed speed of 20 - excessive speeding`)
            } else {
                console.log(`The speed is ${currentSpeed - 20} km/h faster than the allowed speed of 20 - reckless driving`)
            }

        } else {
            console.log(`Driving ${currentSpeed} km/h in a 20 zone`);
        }

    }
}

solve(21, 'residential')