function solve(n) {
  let i = 0;
  let evenNumbers = 0;
  let oddNumbers = 0;
  while (i <= n.length - 1) {
    if (n[i] % 2 === 0) {
      evenNumbers += n[i];
    } else {
      oddNumbers += n[i];
    }

    i++;
  }

  console.log(evenNumbers - oddNumbers);
}

solve([1, 2, 3, 4, 5, 6]);
