function solve(num1, oper, num2) {
    let operator = oper
    let result = 0
    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "/": result = num1 / num2; break;
        case "*": result = num1 * num2; break;
        default:
            break;
    }
    console.log(result.toFixed(2));
}

solve(5,
    '+',
    10
    )