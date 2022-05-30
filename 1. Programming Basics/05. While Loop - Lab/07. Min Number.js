function minNumber(input) {
  let i = 0;
  let command = input[i];
  let minNumber = Number.MAX_SAFE_INTEGER;
  let num = 0;

  while (command !== "Stop") {
    command = input[i];
    num = Number(command);
    if (num < minNumber) {
      minNumber = num;
    }
    i++;
  }

  console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"]);
