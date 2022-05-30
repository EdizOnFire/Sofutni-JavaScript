function solve(n, array) {
  let line = "";
  for (let i = n; i > 0; i--) {
    line += array[i - 1] + " ";
  }

  console.log(line);
}

solve(4, [-1, 20, 99, 5]);
