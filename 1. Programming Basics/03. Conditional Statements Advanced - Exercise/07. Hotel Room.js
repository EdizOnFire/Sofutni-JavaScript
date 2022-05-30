function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentPerNight = 0;
    let studioPerNight = 0;

    if (month === "May" || month === "October") {
        studioPerNight = 50;
        if ((nights > 7) && (nights < 14)) {
            studioPerNight *= 0.95;
        } else if (nights > 14) {
            studioPerNight *= 0.70;
        }
        apartmentPerNight = 65;
        if (nights > 14) {
            apartmentPerNight *= 0.9
        }
    } else if (month === "June" || month === "September") {
        studioPerNight = 75.20;
        if (nights > 14) {
            studioPerNight *= 0.8
        }
        apartmentPerNight = 68.70;
        if (nights > 14) {
            apartmentPerNight *= 0.9
        }
    } else if (month === "July" || month === "August") {
        studioPerNight = 76;
        apartmentPerNight = 77;
        if (nights > 14) {
            apartmentPerNight *= 0.9
        }
    }
    console.log(`Apartment: ${(apartmentPerNight*nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPerNight*nights).toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);