function solve(num1, num2) {
  let sum = 0;
  let printCurrentLine = "";
  let i = num1;
  while (i <= num2) {
    printCurrentLine += i + " ";
    sum += i;
    i++;
  }
  console.log(printCurrentLine);
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
