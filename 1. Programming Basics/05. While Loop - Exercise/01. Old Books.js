function oldBooks(input) {
  let favoriteBook = input[0];
  let i = 1;
  let foundBook = false;
  let book = input[i];

  while (book !== "No More Books") {
    if (book === favoriteBook) {
      foundBook = true;
      break;
    }
    i++;
    book = input[i];
  }

  if (foundBook === false) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${i - 1} books.`);
  } else {
    console.log(`You checked ${i - 1} books and found it.`);
  }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
