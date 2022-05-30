function calc() {
   let firstNumEl = document.getElementById('num1');
   let secondNumEl = document.getElementById('num2');
   let firstNum = Number(firstNumEl.value);
   let secondNum = Number(secondNumEl.value);
   let sum = firstNum + secondNum;
   let resultElement = document.getElementById('sum');
   resultElement.value = sum
}
