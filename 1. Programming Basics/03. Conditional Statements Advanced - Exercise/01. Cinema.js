function cinema(input) {
    let movieType = input[0]
    let r = Number(input[1])
    let c = Number(input[2])

    let income = 0

    if(movieType === 'Premiere'){
        income = r * c * 12
    } else if(movieType === 'Normal'){
        income = r * c * 7.5
    } else if(movieType === 'Discount'){
        income = r * c * 5
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(['Premiere',"10","12"])