function solve(year, month, day) {
    day++

    if (day > 30) {
        day = 1
        month++
    }

    if (month > 12) {
        month = 1
        year++
    }

    if (year < 1900) {
        year = 1901
    }
    
    console.log(`${year}-${month}-${day}`);
}

solve(1, 1, 1)