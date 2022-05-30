function solve(num) {
  num = `${num}`;
  let oddSum = 0;
  let evenSum = 0;

  for (let i = num.length - 1; i > -1; i--) {
    if (num[i] % 2 === 0) {
      evenSum += Number(num[i]);
    } else {
      oddSum += Number(num[i]);
    }
  }
  
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435);
