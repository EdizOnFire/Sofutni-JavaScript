function solve(base, increment) {
  let currentStone = 0;
  let currentMarble = 0;
  let totalStone = 0;
  let totalMarble = 0;
  let currentLapisLazuli = 0;
  let totalLapisLazuli = 0;
  let gold = 0;
  let incrementsPerStage = base * base;
  let height = 1;

  while (base > 0) {
    if (base === 1 || base === 2) {
      gold += base * base * increment;
      if (gold < 1) {
        gold = 1;
      }
      break;
    }

    currentMarble = base * 4 - 4;
    currentStone = incrementsPerStage - currentMarble;
    totalStone += currentStone * increment;

    if (height % 5 === 0) {
      currentLapisLazuli = currentMarble;
      totalLapisLazuli += currentLapisLazuli * increment;
    } else {
      totalMarble += currentMarble * increment;
    }

    base -= 2;
    incrementsPerStage = base * base;
    height++;
  }

  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

solve(23, 0.5);
