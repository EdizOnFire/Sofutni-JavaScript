function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let sum = firstNum - secondNum
    let result = document.getElementById('result');
    result.textContent = `${sum}`
}