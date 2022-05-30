function sumAll(numbers) {
  while (numbers.length > 1) {
    let condensed = Array(numbers.length - 1);
    for (let i = 0; i < numbers.length - 1; i++) {
      condensed[i] = Number(numbers[i]) + Number(numbers[i + 1]);
    }

    numbers = condensed;
  }

  console.log(numbers[0]);
}

sumAll([5, 0, 4, 1, 2]);
