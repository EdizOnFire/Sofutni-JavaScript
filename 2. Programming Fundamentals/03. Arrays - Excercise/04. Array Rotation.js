function solve(array, num) {
  let writeLine = "";
  for (let i = 0; i < num; i++) {
    array.push(array.shift());
  }

  for (let i = 0; i < array.length; i++) {
    writeLine += array[i] + " ";
  }

  console.log(writeLine);
}

solve([51, 47, 32, 61, 21], 2);
