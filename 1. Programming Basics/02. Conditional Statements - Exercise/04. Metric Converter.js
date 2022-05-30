function metricConverter(input) {
  let num1 = Number(input[0]);
  let from = input[1];
  let to = input[2];
  let resultInMm = 0;
  let result = 0;

  if (from === "cm") {
    resultInMm = num1 * 10;
  } else if (from === "m") {
    resultInMm = num1 * 1000;
  } else if (from === "mm") {
    resultInMm = num1;
  }
  if (to === "cm") {
    result = resultInMm / 10;
  } else if (to === "m") {
    result = resultInMm / 1000;
  } else {
    result = resultInMm;
  }
  console.log(result.toFixed(3));
}

metricConverter(["150", "m", "cm"]);
