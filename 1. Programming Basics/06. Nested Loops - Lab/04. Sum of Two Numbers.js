function sumOfTwo(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
  
    for (let i = startInterval; i <= endInterval; i++) {
      for (let j = startInterval; j <= endInterval; j++) {
        combinations++;
        if (i + j === magicNumber) {
          console.log(
            `Combination N:${combinations} (${i} + ${j} = ${magicNumber})`
          );
          return;
        }
      }
    }
    
    console.log(`${combinations} combinations - neither equals ${magicNumber}`);
  }

  sumOfTwo(["1",
  "10",
  "5"])
  