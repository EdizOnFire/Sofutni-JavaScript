function solve(input) {
    let words = input.shift().split(" ");
    let objWontedWords = [];

    for (let word of words) {
        let wordCounter = 0;

        for (let otherWord of input) {
            if (otherWord === word) {
                wordCounter++;
            }
        }

        objWontedWords.push({ word, wordCounter });
    }

    objWontedWords.sort((a, b) => b.wordCounter - a.wordCounter);

    for (let i = 0; i < objWontedWords.length; i++) {
        console.log(`${objWontedWords[i].word} - ${objWontedWords[i].wordCounter}`);
    }
}

solve([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
