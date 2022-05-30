function moving(input) {
  let freeWidth = Number(input[0]);
  let freeLength = Number(input[1]);
  let freeHeight = Number(input[2]);
  let i = 3;
  let boxesCommand = input[i];
  let boxes = 0;
  let freeKbm = freeWidth * freeLength * freeHeight;
  let sumOfBoxes = 0;
  let freeSpace = 0;

  while (i < input.length) {
    boxesCommand = input[i];
    if (boxesCommand === "Done") {
      console.log(`${freeSpace} Cubic meters left.`);
      break;
    }
    boxes = Number(boxesCommand);
    sumOfBoxes += boxes;
    freeSpace = freeKbm - sumOfBoxes;
    i++;
  }

  if (sumOfBoxes > freeKbm) {
    console.log(
      `No more free space! You need ${sumOfBoxes - freeKbm} Cubic meters more.`
    );
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
