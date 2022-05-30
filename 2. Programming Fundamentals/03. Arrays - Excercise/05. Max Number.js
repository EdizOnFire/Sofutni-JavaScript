function solve(array) {
  let writeLine = "";
  let j = 0;
  let isBigger = true;
  for (let i = 0; i < array.length; i++) {
    isBigger = true;
    j = i + 1;
    while (j < array.length) {
      if (array[j] >= array[i]) {
        isBigger = false;
        j++;
        break;
      }
      j++;
    }

    if (isBigger === true) {
      writeLine += `${array[i]} `;
    }
  }

  console.log(writeLine);
}

solve([41, 41, 34, 20]);
