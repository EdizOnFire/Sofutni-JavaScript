function solve(num) {
    let num0 = 0
    let num1 = 1
    let num2 = 2
    let num3 = 3
    let num4 = 4
    let num5 = 5
    let num6 = 6
    let num7 = 7
    let num8 = 8
    let num9 = 9

    let lastDigit = num % 10

    if (num0 === lastDigit){
        console.log('zero');
    } else if (num1 === lastDigit){
        console.log('one');
    } else if (num2 === lastDigit){
        console.log('two');
    } else if (num3 === lastDigit){
        console.log('three');
    } else if (num4 === lastDigit){
        console.log('four');
    } else if (num5 === lastDigit){
        console.log('five');
    } else if (num6 === lastDigit){
        console.log('six');
    } else if (num7 === lastDigit){
        console.log('seven');
    } else if (num8 === lastDigit){
        console.log('eight');
    } else if (num9 === lastDigit){
        console.log('nine');
    }
}

solve(1988)