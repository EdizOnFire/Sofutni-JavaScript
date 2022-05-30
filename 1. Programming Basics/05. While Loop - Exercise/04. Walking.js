function walking(input) {
  let stepsPerDayGoal = 10000;
  let i = 0;
  let passedSteps = input[i];
  let currentSteps = 0;

  while (i < input.length) {
    if (passedSteps === "Going home") {
      i++;
    }

    passedSteps = Number(input[i]);
    currentSteps += passedSteps;
    i++;
    passedSteps = input[i];
  }

  if (currentSteps >= stepsPerDayGoal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${currentSteps - stepsPerDayGoal} steps over the goal!`);
  } else {
    console.log(`${stepsPerDayGoal - currentSteps} more steps to reach goal.`);
  }
}

walking(["1000", "1500", "2000", "6500"]);
