function password(input) {
  let username = input[0];
  let password = input[1];
  let data = input[2];
  let i = 3;

  while (data !== password) {
    data = input[i];
    i++;
  }

  console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
