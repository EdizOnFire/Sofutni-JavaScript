function solve(people, type, day) {
  let priceForOne = 0;
  if (type === "Students") {
    if (day === "Friday") {
      priceForOne = 8.45;
    } else if (day === "Saturday") {
      priceForOne = 9.8;
    } else if (day === "Sunday") {
      priceForOne = 10.46;
    }
  } else if (type === "Business") {
    if (day === "Friday") {
      priceForOne = 10.9;
    } else if (day === "Saturday") {
      priceForOne = 15.6;
    } else if (day === "Sunday") {
      priceForOne = 16;
    }
  } else if (type === "Regular") {
    if (day === "Friday") {
      priceForOne = 15;
    } else if (day === "Saturday") {
      priceForOne = 20;
    } else if (day === "Sunday") {
      priceForOne = 22.5;
    }
  }

  let fullPrice = people * priceForOne;

  if (type === "Students") {
    if (people >= 30) {
      fullPrice *= 0.85;
    }
  } else if (type === "Business") {
    if (people >= 100) {
      fullPrice -= 10 * priceForOne;
    }
  } else if (type === "Regular") {
    if (people >= 10 && people <= 20) {
      fullPrice *= 0.95;
    }
  }

  console.log(`Total price: ${fullPrice.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
