function solve(arr) {
  let newArr = [];
  let num = 1;
  let printLine = "";
  for (let command of arr) {
    if (command === "add") {
      newArr.push(num);
    } else if (command === "remove") {
      newArr.pop();
    }

    num++;
  }

  for (let i = 0; i < newArr.length; i++) {
    printLine += newArr[i] + " ";
  }

  if (printLine === "") {
    console.log("Empty");
  } else {
    console.log(printLine);
  }
}

solve(["add", "add", "remove", "add", "add"]);
