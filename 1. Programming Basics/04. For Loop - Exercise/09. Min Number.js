function minNumber(input) {
  let index = 0;
  let n = Number(input[index]);
  index++;
  let min = Number(input[index]);
  index++;

  for (let i = 1; i < n; i++) {
    let num = Number(input[index]);
    index++;
    if (min > num) {
      min = num;
    }
  }
  console.log(min);
}

minNumber(["2", "100", "99"]);
