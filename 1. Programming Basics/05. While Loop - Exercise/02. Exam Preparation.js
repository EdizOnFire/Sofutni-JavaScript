function examPreparation(input) {
  let allowedBadGrades = Number(input[0]);
  let i = 1;
  let assignment = input[i];
  i++;
  let grade = Number(input[i]);
  let sumOfGrades = 0;
  let badGrades = 0;

  while (assignment !== "Enough") {
    if (grade <= 4) {
      badGrades++;
      if (badGrades >= allowedBadGrades) {
        console.log(`You need a break, ${allowedBadGrades} poor grades.`);
        break;
      }
    }

    sumOfGrades += grade;
    i++;
    assignment = input[i];
    i++;
    grade = Number(input[i]);
  }

  if (assignment === "Enough") {
    console.log(`Average score: ${(sumOfGrades / (i / 2 - 1)).toFixed(2)}`);
    console.log(`Number of problems: ${i / 2 - 1}`);
    console.log(`Last problem: ${input[i - 3]}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
