function numbers(input) {
  let num1 = Number(input[0]);
  if (num1 < 100) {
    console.log("Less than 100");
  } else if (num1 > 200) {
    console.log("Greater than 200");
  } else {
    console.log("Between 100 and 200");
  }
}

numbers(["95"]);
