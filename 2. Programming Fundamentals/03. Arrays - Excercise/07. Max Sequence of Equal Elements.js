function solve(array1) {
  let start = 0;
  let count = 0;
  let max = 0;
  let writeLine = "";
  for (let i = 0; i < array1.length - 1; i++) {
    if (array1[i] === array1[i + 1]) {
      count++;
      if (count > max) {
        start = i - count;
        max = count;
      }
    } else {
      count = 0;
    }
  }

  for (let i = start + 1; i <= start + max + 1; i++) {
    writeLine += array1[i] + " ";
  }

  console.log(writeLine);
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
