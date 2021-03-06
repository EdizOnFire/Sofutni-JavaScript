function solve(arr1, arr2) {
  let numbers = arr1;
  let commands = arr2;

  for (let command of commands) {
      let tokens = command.split(" ");
      let currentCommand = tokens[0];

      if (currentCommand === "add") {
          let index = +tokens[1];
          let element = +tokens[2];
          numbers.splice(index, 0, element);
      } else if (currentCommand === "addMany") {
          let index = +tokens[1];
          tokens.splice(0, 2);
          let numbersToAdd = tokens.map(Number);
          numbers.splice(index, 0, ...numbersToAdd);
      } else if (currentCommand === "contains") {
          let result = numbers.indexOf(+tokens[1]);
          console.log(result);
      } else if (currentCommand === "remove") {
          let index = +tokens[1];
          numbers.splice(index, 1);
      } else if (currentCommand === "shift") {
          let position = tokens[1];
          for (let i = 0; i < position; i++) {
              let firstNumber = numbers.shift();
              numbers.push(firstNumber);
          }
      } else if (currentCommand === "sumPairs") {
          let resultArr = [];
          if (numbers.length % 2 !== 0) {
              numbers.push(0);
          }

          for (let i = 0; i < numbers.length - 1; i += 2) {
              let sum = numbers[i] + numbers[i + 1];
              resultArr.push(sum);
          }
          numbers = resultArr;
      } else if (currentCommand === "print") {
          console.log(`[ ${numbers.join(", ")} ]`);
          return;
      }
  }
}

solve([1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);
