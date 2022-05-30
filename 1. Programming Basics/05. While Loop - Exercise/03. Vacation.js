function vacation(input) {
  let requiredFunds = Number(input[0]);
  let currentFunds = Number(input[1]);
  let i = 2;
  let action = input[i];
  i++;
  let actionFunds = Number(input[i]);

  while (i < input.length) {
    if (action === "spend") {
      currentFunds -= actionFunds;
      if (currentFunds < 0) {
        currentFunds = 0;
      }
    } else if (action === "save") {
      currentFunds += actionFunds;
    }

    i++;
    if (i === input.length) {
      break;
    }

    action = input[i];
    i++;
    actionFunds = Number(input[i]);
  }

  if (currentFunds >= requiredFunds) {
    console.log(`You saved the money for ${i / 2 - 1} days.`);
  } else {
    console.log(`You can't save the money.`);
    console.log(i / 2 - 1);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
