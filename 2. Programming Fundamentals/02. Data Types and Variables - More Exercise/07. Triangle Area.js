function test(side1, side2, side3) {
  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log(area);
}

test(2, 3.5, 4);
