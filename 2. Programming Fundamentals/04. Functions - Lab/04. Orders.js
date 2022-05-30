function solve(product, qty) {
  let coffee = 1.5;
  let water = 1;
  let coke = 1.4;
  let snacks = 2;

  let sum = 0;

  if (product === "coffee") {
    sum += coffee * qty;
  } else if (product === "water") {
    sum += water * qty;
  } else if (product === "coke") {
    sum += coke * qty;
  } else if (product === "snacks") {
    sum += snacks * qty;
  }

  console.log(sum.toFixed(2));
}

solve("water", 5);
