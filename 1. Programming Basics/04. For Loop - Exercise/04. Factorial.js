function leapYears(input) {
    let num = Number(input[0])
    let mum = 1
    
    for (let i = 1; i <= num; i++) {
        mum *= i;
    }
    console.log(mum)
}
leapYears(["4"])