function figures(input) {
  let figure = input[0];
  let num1 = Number(input[1]);
  let num2 = Number(input[2]);

  let size = 0;
  if (figure === "square") {
    size = num1 ** 2;
  } else if (figure === "rectangle") {
    size = num1 * num2;
  } else if (figure === "circle") {
    size = Math.PI * num1 ** 2;
  } else if (figure === "triangle") {
    size = (num1 * num2) / 2;
  }
  console.log(size.toFixed(3));
}

figures(["square", "5"]);
