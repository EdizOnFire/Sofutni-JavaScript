function maxNumber(input) {
  let i = 0;
  let command = input[i];
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let num = 0;

  while (command !== "Stop") {
    command = input[i];
    num = Number(command);
    if (num > maxNumber) {
      maxNumber = num;
    }
    i++;
  }

  console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"]);
