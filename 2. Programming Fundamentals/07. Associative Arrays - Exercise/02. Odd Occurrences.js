function solve(input) {
    let words = input.toLowerCase().split(" ");
    let newWords = []

    for (let word of words) {
        let wordCounter = 0
        for (let word2 of words) {
            if (word === word2) {
                wordCounter++
            }
        }

        if (wordCounter % 2 !== 0 && !newWords.includes(word)) {
            newWords.push(word)
        }
    }

    let line = ""
    newWords.forEach(a => line += `${a} `)
    console.log(line);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')