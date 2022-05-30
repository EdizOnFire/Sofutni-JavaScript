function solve(arr) {
  let resultArr = [];

  for (let element of arr) {
    if (element < 0) {
      resultArr.unshift(element);
    } else {
      resultArr.push(element);
    }
  }

  for (let i = 0; i < resultArr.length; i++) {
    console.log(resultArr[i]);
  }
}

solve([7, -2, 8, 9]);
