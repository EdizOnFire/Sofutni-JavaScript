function time(input) {
  let currentHour = Number(input[0]);
  let currentMinute = Number(input[1]);

  let totalTimeM = currentHour * 60 + currentMinute;
  totalTimeM = totalTimeM + 15;

  let h = Math.floor(totalTimeM / 60);
  let m = totalTimeM % 60;
  if (h > 23) {
    h = 0;
  }
  if (m < 10) {
    console.log(`${h}:0${m}`);
  } else {
    console.log(`${h}:${m}`);
  }
}

time(["23", "59"]);
