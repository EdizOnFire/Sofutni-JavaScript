function swimmingWorldRecord(input) {
  let seconds = Number(input[0]);
  let meters = Number(input[1]);
  let secondsForMeter = Number(input[2]);

  let ivanSwimmingSeconds = meters * secondsForMeter;
  let a = Math.floor(meters / 15);
  let b = a * 12.5;
  let fullSwimmingSeconds = ivanSwimmingSeconds + b;

  if (fullSwimmingSeconds < seconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${fullSwimmingSeconds.toFixed(
        2
      )} seconds.`
    );
  } else if (fullSwimmingSeconds >= seconds) {
    console.log(
      `No, he failed! He was ${(fullSwimmingSeconds - seconds).toFixed(
        2
      )} seconds slower.`
    );
  }
}

swimmingWorldRecord(["55555.67", "3017", "5.03"]);
