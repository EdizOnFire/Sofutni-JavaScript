function solve(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 0; j < i; j++) {
      str += `${i} `;
    }

    console.log(str);
  }
}

solve(3);
