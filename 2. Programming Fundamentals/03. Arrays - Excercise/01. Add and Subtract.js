function solve(array) {
  let originalSum = 0;
  for (let i = 0; i < array.length; i++) {
    originalSum += array[i];
  }

  let newSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      array[i] += i;
    } else {
      array[i] -= i;
    }

    newSum += array[i];
  }

  console.log(array);
  console.log(originalSum);
  console.log(newSum);
}

solve([5, 15, 23, 56, 35]);
