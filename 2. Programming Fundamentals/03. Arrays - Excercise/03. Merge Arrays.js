function solve(array1, array2) {
  let writeLine = "";
  let i = 0;
  while (i < array1.length) {
    if (i % 2 === 0) {
      writeLine += Number(array1[i]) + Number(array2[i]);
    } else {
      writeLine += array1[i] + array2[i];
    }

    i++;
    if (i < array1.length) {
      writeLine += " - ";
    }
  }

  console.log(writeLine);
}

solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
