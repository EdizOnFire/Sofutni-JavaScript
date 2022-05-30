function yardGreening(input) {
  let finalPrice = input[0];
  let discount = 0.18;
  let meter = 7.61;
  let fullPrice = finalPrice * meter;
  let discountAmount = discount * fullPrice;
  let finalFinalPrice = fullPrice - discountAmount;

  console.log(`The final price is: ${finalFinalPrice} lv.`);
  console.log(`The discount is: ${discountAmount} lv.`);
}

yardGreening(["550"]);
