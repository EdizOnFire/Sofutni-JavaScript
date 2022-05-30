function charityCampaign(input) {
  let days = input[0];
  let bakers = input[1];
  let cakes = input[2];
  let gofrets = input[3];
  let pancakes = input[4];
  let cake = 45;
  let gofret = 5.8;
  let pancake = 3.2;

  cakesPerDay = cakes * cake;
  gofretsPerDay = gofrets * gofret;
  pancakesPerDay = pancakes * pancake;
  moneyPerDay = (cakesPerDay + gofretsPerDay + pancakesPerDay) * bakers;
  fullAmount = moneyPerDay * days;
  cleanAmount = fullAmount - fullAmount * 0.125;

  console.log(cleanAmount);
}

charityCampaign(["23", "8", "14", "30", "16"]);
