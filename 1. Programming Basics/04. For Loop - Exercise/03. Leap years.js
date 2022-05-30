function leapYears(input) {
  let n = Number(input[0]);
  let m = Number(input[1]);

  for (let i = n; i <= m; i += 4) {
    console.log(i);
  }
}

leapYears(["1908", "1919"]);
