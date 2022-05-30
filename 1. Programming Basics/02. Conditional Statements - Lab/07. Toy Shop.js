function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollsCount = Number(input[2]);
  let teddysCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let trucksCount = Number(input[5]);

  let sum =
    puzzleCount * 2.6 +
    dollsCount * 3 +
    teddysCount * 4.1 +
    minionsCount * 8.2 +
    trucksCount * 2;
  let toySum =
    puzzleCount + dollsCount + teddysCount + minionsCount + trucksCount;

  if (toySum >= 50) {
    sum = sum * 0.75;
  }
  let sumAfterRent = sum * 0.9;
  if (sumAfterRent >= tripPrice) {
    console.log(`Yes! ${(sumAfterRent - tripPrice).toFixed(2)} lv left.`);
  } else {
    console.log(
      `Not enough money! ${(tripPrice - sumAfterRent).toFixed(2)} lv needed.`
    );
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
