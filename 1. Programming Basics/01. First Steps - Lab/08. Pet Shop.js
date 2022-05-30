function petshop(input) {
  let dogs = input[0];
  let otherAnimals = input[1];
  let lev = dogs * 2.5 + otherAnimals * 4;
  console.log(lev);
}
petshop(["5", "4"]);
