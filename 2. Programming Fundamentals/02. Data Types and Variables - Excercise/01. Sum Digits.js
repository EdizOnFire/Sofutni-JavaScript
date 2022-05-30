function solve(num) {
  let numberAsString = num.toString();
  let sum = 0;
  let stringL = numberAsString.length;
  for (let i = 0; i < stringL; i++) {
    sum += Number(numberAsString[i]);
  }

  console.log(sum);
}

solve(245678);
