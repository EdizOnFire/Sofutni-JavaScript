function solve(numbers) {
    numbers = `${numbers}`;
    let firstNumber = numbers[0];
    let isSameNumber = true;
    let sum = 0;
    for (let digit of numbers) {
        if (firstNumber !== digit) {
            isSameNumber = false;
        }

        sum += Number(digit);
    }

    console.log(isSameNumber);
    console.log(sum);
}

solve(1234);