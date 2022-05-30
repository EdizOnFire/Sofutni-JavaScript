function kaiju(input) {
  let budget = Number(input[0]);
  let extras = Number(input[1]);
  let clothPrice = Number(input[2]);

  let decor = budget * 0.1;
  let clothesPrice = extras * clothPrice;
  if (extras > 150) {
    clothesPrice = clothesPrice - (clothesPrice /= 10);
  }
  let price = decor + clothesPrice;

  if (price > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${(price - budget).toFixed(2)} leva more.`);
  } else if (price <= budget) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(budget - price).toFixed(2)} leva left.`
    );
  }
}

kaiju(["15437.62", "186", "57.99"]);
