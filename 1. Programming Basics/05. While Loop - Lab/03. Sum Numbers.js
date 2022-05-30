function numbers(input) {
  let i = 1;
  let target = Number(input[0]);
  let sum = 0;

  while (sum < target) {
    sum += Number(input[i]);
    i++;
  }

  console.log(sum);
}

numbers(["100", "10", "20", "30", "40"]);
