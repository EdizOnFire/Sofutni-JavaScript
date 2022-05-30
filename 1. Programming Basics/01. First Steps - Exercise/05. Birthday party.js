function birthday(input) {
  let rent = Number(input[0]);
  let cake = rent * 0.2;
  let drinks = cake * 0.55;
  let clown = rent / 3;
  let sum = rent + cake + drinks + clown;

  console.log(sum);
}

birthday(["2250"]);
