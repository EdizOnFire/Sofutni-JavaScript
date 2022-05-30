function graduation(input) {
  let name = input[0];
  let i = 1;
  let gradeForYear = Number(input[i]);
  let numberOfGrades = i;
  let sumOfGrades = 0;
  let fullEducationGrade = 0;

  while (i < input.length) {
    gradeForYear = Number(input[i]);
    numberOfGrades = i;
    if (gradeForYear < 4) {
      console.log(`${name} has been excluded at ${i} grade`);
      break;
    } else {
      sumOfGrades += gradeForYear;
      i++;
    }
  }

  fullEducationGrade = sumOfGrades / numberOfGrades;
  if (gradeForYear >= 4) {
    console.log(
      `${name} graduated. Average grade: ${fullEducationGrade.toFixed(2)}`
    );
  }
}

graduation([
  "Gosho",
  "5",
  "5.5",
  "6",
  "5.43",
  "5.5",
  "6",
  "5.55",
  "5",
  "6",
  "6",
  "5.43",
  "5",
]);
