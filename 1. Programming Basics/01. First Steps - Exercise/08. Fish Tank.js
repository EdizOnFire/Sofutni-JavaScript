function fishTank(input) {
  let length = input[0];
  let width = input[1];
  let height = input[2];
  let percentage = input[3];
  let aquarium = length * width * height;
  let litre = aquarium * 0.001;
  let newPercentage = percentage * 0.01;
  let neededLitre = litre * (1 - newPercentage);

  console.log(neededLitre);
}

fishTank(["85", "75", "47", "17"]);
