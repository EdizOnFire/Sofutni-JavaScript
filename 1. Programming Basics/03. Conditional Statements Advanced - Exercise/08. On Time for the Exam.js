function onTime(input) {
    let examaHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])

    let examTime = examaHour * 60 + examMinute;
    let arivalTime = arrivalHour * 60 + arrivalMinute;

    if (arivalTime > examTime) {
        console.log('Late');
        if (arivalTime - examTime < 60) {
            console.log(`${arivalTime - examTime} minutes after the start`);
        } else {
            let diff = arivalTime - examTime
            let h = Math.floor(diff / 60);
            let m = diff % 60
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    } else if (arivalTime <= examTime && examTime - arivalTime <= 30) {
        console.log('On time');
        if (examTime - arivalTime !== 0) {
            console.log(`${examTime - arivalTime} minutes before the start`);
        }
    } else {
        console.log('Early');
        let diff = examTime - arivalTime;
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (diff < 60) {
            console.log(`${diff} minutes before the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours before the start`);
        } else {
            console.log(`${h}:${m} hours before the start`);
        }
    }
}
onTime(["10", "00", "10", "00"])