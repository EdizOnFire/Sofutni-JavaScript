function solve(input) {
  let username = input[0];
  let password = ""
  let i = 1;
  let currentPassword = input[i];

  for (let index = username.length - 1; index >= 0; index--) {
    password += username[index];
  }

  while (i < input.length) {
    currentPassword = input[i];
    if (currentPassword === password) {
      console.log(`User ${username} logged in.`);
      break;
    } else if (i === 4) {
      console.log(`User ${username} blocked!`);
      break;
    } else {
        console.log("Incorrect password. Try again.");
    }

    i++;
  }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);
// ['Acer','login','go','let me in','recA']
// ['momo','omom']
// ['sunny','rainy','cloudy','sunny','not sunny']
