function traveling(input) {
    let i = 0;
    let inputLine = input[i++];
  
    while (inputLine !== "End") {
      let location = inputLine;
      let requiredFunds = Number(input[i++]);
      let currentFunds = 0;
  
      while (currentFunds < requiredFunds) {
        currentFunds = currentFunds + Number(input[i++]);
      }
      if (currentFunds >= requiredFunds) {
        console.log(`Going to ${location}!`);
        inputLine = input[i++];
      }
    }
  }

  traveling(["Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End"])
    