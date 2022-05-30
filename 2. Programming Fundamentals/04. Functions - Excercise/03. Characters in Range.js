function charInRange(str1, str2) {
  let str1Num = str1.charCodeAt();
  let str2Num = str2.charCodeAt();
  let currentNum = str1Num + 1;
  let currentChar = String.fromCharCode(currentNum);
  let writeLine = "";

  if (str1Num < str2Num) {
    for (let i = str1Num; i < str2Num - 1; i++) {
      currentChar = String.fromCharCode(currentNum);
      writeLine += currentChar + " ";
      currentNum++;
    }
  } else {
    currentNum = str2Num + 1;
    for (let i = str2Num; i < str1Num - 1; i++) {
      currentChar = String.fromCharCode(currentNum);
      writeLine += currentChar + " ";
      currentNum++;
    }
  }

  console.log(writeLine);
}

charInRange("C", "#");
