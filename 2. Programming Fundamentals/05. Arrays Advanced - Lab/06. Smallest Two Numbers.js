function solve(arr) {
  let sortedInAsc = arr.sort((a, b) => {
    return a - b;
  });
  let smallestElements = sortedInAsc.slice(0, 2);

  console.log(smallestElements.join(" "));
}

solve([30, 15, 50, 5]);
