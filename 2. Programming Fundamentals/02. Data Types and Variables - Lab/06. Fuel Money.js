function solve(distance, passengers, price) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += passengers * 0.1;
  let moneyCost = neededFuel * price;
  console.log(`Needed money for that trip is ${moneyCost} lv.`);
}

solve(260, 9, 2.49);
