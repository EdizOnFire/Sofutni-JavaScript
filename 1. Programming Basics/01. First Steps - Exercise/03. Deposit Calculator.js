function deposit(input) {
  let deposit = Number(input[0]);
  let months = Number(input[1]);
  let yearlyDebt = Number(input[2]);
  let currentDebt = deposit * (yearlyDebt / 100);
  let debtForMonth = currentDebt / 12;
  let sum = deposit + months * debtForMonth;

  console.log(sum);
}

deposit(["200", "3", "5.7"]);
