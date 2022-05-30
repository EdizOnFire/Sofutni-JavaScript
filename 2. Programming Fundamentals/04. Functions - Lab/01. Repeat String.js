function solve(str, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

solve = solve("abc", 3);

console.log(solve);
