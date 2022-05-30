function solve(word, text) {
    text = text.toLowerCase()
    let isNoWords = true
    for (let currentWord of text.split(" ")) {
        if (currentWord === word) {
            console.log(word);
            isNoWords = false
        }
    }

    if (isNoWords) {
        console.log(`${word} not found!`);
    }
}

solve('javascript',
'JavaScript is the best programming language')