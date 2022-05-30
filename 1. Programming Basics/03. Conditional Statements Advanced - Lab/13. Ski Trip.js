function skiHoliday(input) {

    let days = Number(input[0])
    let roomType = input[1]
    let feedback = input[2]
    let nights = days - 1
    let fullPrice = 0

    if (roomType === 'room for one person') {
        fullPrice = nights * 18
    } else if (roomType === 'apartment') {
        if (nights < 10) {
            fullPrice = (nights * 25) * 0.7
        }
        else if (nights >= 10 && nights <= 15) {
            fullPrice = (nights * 25) * 0.65
        }
        else if (nights > 15) {
            fullPrice = (nights * 25) * 0.5
        }
    } else if (roomType === 'president apartment') {
        if (nights < 10) {
            fullPrice = (nights * 35) * 0.9
        }
        else if (nights >= 10 && nights <= 15) {
            fullPrice = (nights * 35) * 0.85
        }
        else if (nights > 15) {
            fullPrice = (nights * 35) * 0.80
        }
    }

    if (feedback === 'positive') {
        fullPrice = fullPrice * 1.25
    } else if (feedback === 'negative') {
        fullPrice = fullPrice * 0.9
    }
    console.log(fullPrice.toFixed(2))
}
skiHoliday(["14", "apartment", "positive"])