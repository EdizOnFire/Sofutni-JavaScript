function sequenceCounter(input) {
  let counter = 1;
  let n = Number(input[0]);

  while (counter <= n) {
    console.log(counter);
    counter = counter * 2 + 1;
  }
}

sequenceCounter(["3"]);
