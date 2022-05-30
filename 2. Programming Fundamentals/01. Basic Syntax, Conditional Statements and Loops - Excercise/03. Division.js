function solve(num1) {
  let dNum = 0;

  if (num1 % 2 === 0) {
    dNum = 2;
  }
  if (num1 % 3 === 0) {
    dNum = 3;
  }
  if ((num1 % 3 === 0 && num1 % 2 === 0) || num1 % 6 === 0) {
    dNum = 6;
  }
  if (num1 % 7 === 0) {
    dNum = 7;
  }
  if (num1 % 10 === 0) {
    dNum = 10;
  }

  if (dNum > 0) {
    console.log(`The number is divisible by ${dNum}`);
  } else {
    console.log("Not divisible");
  }
}

solve(2);
