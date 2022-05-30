function accountBalance(input) {
  let i = 0;
  let command = input[i];
  i++;
  let totalSum = 0;

  while (command !== "NoMoreMoney") {
    let num = Number(command);

    if (num < 0) {
      console.log("Invalid operation!");
      break;
    }

    totalSum += num;
    console.log(`Increase: ${num.toFixed(2)}`);

    command = input[i];
    i++;
  }
  console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
