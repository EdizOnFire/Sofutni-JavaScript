function coins(input) {
  let money = Number(input[0]);
  let moneyInCoins = Math.floor(money * 100);
  let counter = 0;

  while (moneyInCoins > 0) {
    if (moneyInCoins >= 200) {
      counter++;
      moneyInCoins -= 200;
    } else if (moneyInCoins >= 100) {
      counter++;
      moneyInCoins -= 100;
    } else if (moneyInCoins >= 50) {
      counter++;
      moneyInCoins -= 50;
    } else if (moneyInCoins >= 20) {
      counter++;
      moneyInCoins -= 20;
    } else if (moneyInCoins >= 10) {
      counter++;
      moneyInCoins -= 10;
    } else if (moneyInCoins >= 5) {
      counter++;
      moneyInCoins -= 5;
    } else if (moneyInCoins >= 2) {
      counter++;
      moneyInCoins -= 2;
    } else {
      counter++;
      moneyInCoins -= 1;
    }
  }

  console.log(counter);
}

coins(["1.23"]);
