function trainTheTrainers(input) {
  let index = 0;
  let n = Number(input[index++]);
  let command = input[index++];
  let averageGrade = 0;
  let presentCounter = 0;

  while (command !== "Finish") {
    let presentName = command;
    let tempAverageGrade = 0;
    let tempSumOfGrade = 0;
    presentCounter++;
    for (let i = 0; i < n; i++) {
      let grade = Number(input[index++]);
      tempSumOfGrade += grade;
    }
    tempAverageGrade = tempSumOfGrade / n;
    averageGrade += tempAverageGrade;
    console.log(`${presentName} - ${tempAverageGrade.toFixed(2)}.`);
    command = input[index++];
  }
  averageGrade = averageGrade / presentCounter;
  console.log(`Student's final assessment is ${averageGrade.toFixed(2)}.`);
}

trainTheTrainers([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
