function conversion(input) {
  let radians = Number(input[0]);
  let degrees = (radians * 180) / Math.PI;
  console.log(degrees.toFixed(0));
}

conversion(["3.1416"]);
