function salary(input) {
  let n = Number(input[0]) + 1;
  let salary = Number(input[1]);

  for (let i = 2; i <= n; i++) {
    let currentTab = input[i];

    if (currentTab === "Facebook") {
      salary -= 150;
    } else if (currentTab === "Instagram") {
      salary -= 100;
    } else if (currentTab === "Reddit") {
      salary -= 50;
    }
  }
  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
