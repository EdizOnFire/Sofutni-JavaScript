function solve(num1, num2) {
  let result = num1;
  for (let i = 1; i < num2; i++) {
    result *= num1;
  }

  console.log(result);
}

solve(2, 8);
