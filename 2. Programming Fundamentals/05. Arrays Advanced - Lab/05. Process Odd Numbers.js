function solve(arr) {
  let newArr = [];
  let writeLine = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(arr[i] * 2);
    }
  }

  for (let i = newArr.length - 1; i > -1; i--) {
    writeLine += newArr[i] + " ";
  }
  
  console.log(writeLine);
}

solve([10, 15, 20, 25]);
