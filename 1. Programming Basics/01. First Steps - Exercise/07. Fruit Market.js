function fruitMarket(input) {
  let strawberriesLv = input[0];
  let bananasKg = input[1];
  let orangesKg = input[2];
  let raspberriesKg = input[3];
  let strawberriesKg = input[4];
  let raspberriesLv = strawberriesLv * 0.5;
  let orangesLv = raspberriesLv * 0.6;
  let bananasLv = raspberriesLv * 0.2;
  let raspberries = raspberriesKg * raspberriesLv;
  let oranges = orangesKg * orangesLv;
  let bananas = bananasKg * bananasLv;
  let strawberries = strawberriesKg * strawberriesLv;

  let sum = raspberries + strawberries + oranges + bananas;

  console.log(sum);
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
