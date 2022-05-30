function solve(word, sent) {
    let wordsArr = word.split(", ");
    for (let word of wordsArr) {
        let stars = "*".repeat(word.length);
        sent = sent.replace(stars, word);
    }

    console.log(sent);
}

solve('great',
    'softuni is ***** place for learning new programming languages'
)