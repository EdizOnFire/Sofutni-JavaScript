function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let i = floors; i >= 1; i--) {
    let printCurrentLine = "";

    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        printCurrentLine += `L${i}${j} `;
      } else {
        if (i % 2 === 0) {
          printCurrentLine += `O${i}${j} `;
        } else {
          printCurrentLine += `A${i}${j} `;
        }
      }
    }

    console.log(printCurrentLine);
    printCurrentLine = "";
  }
}

building(["6", "4"]);
