function specialNumbers(input) {
  let n = Number(input[0]);

  let i1 = 0;
  let i2 = 0;
  let i3 = 0;
  let i4 = 0;

  let index = 0;

  let consoleWriteLine = "";

  for (let i = 1111; i <= 9999; i++) {
    i = `${i}`;

    while (index < 4) {
      i1 = Number(i[index++]);
      i2 = Number(i[index++]);
      i3 = Number(i[index++]);
      i4 = Number(i[index]);

      if (n % i1 === 0) {
        if (n % i2 === 0) {
          if (n % i3 === 0) {
            if (n % i4 === 0) {
              i = Number(i);
              consoleWriteLine += i + " ";
            }
          }
        }
      }

      index++;
    }

    index = 0;
  }
  console.log(consoleWriteLine);
}

specialNumbers(["3"]);
