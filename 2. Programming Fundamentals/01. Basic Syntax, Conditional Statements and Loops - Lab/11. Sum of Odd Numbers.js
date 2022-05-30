function solve(num) {
  let n = 1;
  let sum = 0;
  while (n <= num * 2) {
    if (n % 2 !== 0) {
      console.log(n);
      sum += n;
    }
    n++;
  }
  console.log(`Sum: ${sum}`);
}

solve(3);
