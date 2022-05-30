function solve(input) {
  let i = 0;
  let goldPerShift = input[i];
  let oneGold = 67.51;
  let oneBitcoin = 11949.16;
  let sum = 0;
  let bitcoinCounter = 0;
  let dayCounter = 1;
  let condition = true;

  while (i < input.length) {
    if (i === 2) {
      goldPerShift *= 0.7;
    }
    sum += goldPerShift * oneGold;
    while (sum >= oneBitcoin) {
      sum -= oneBitcoin;
      bitcoinCounter++;
    }

    i++;
    goldPerShift = input[i];
    if (bitcoinCounter >= 1 && condition === true) {
      condition = false;
    } else if (condition === true) {
      dayCounter++;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinCounter}`);
  if (bitcoinCounter >= 1) {
    console.log(`Day of the first purchased bitcoin: ${dayCounter}`);
  }
  console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);
//[3124.15, 504.212, 2511.124]
