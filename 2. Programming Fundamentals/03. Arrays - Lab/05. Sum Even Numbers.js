function solve(n) {
  let i = 0;
  let sum = 0;
  while (i <= n.length - 1) {
    if (Number(n[i]) % 2 === 0) {
      sum += Number(n[i]);
    }
    
    i++;
  }

  console.log(sum);
}

solve(["1", "2", "3", "4", "5", "6"]);
