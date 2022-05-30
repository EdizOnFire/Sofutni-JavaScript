function solve(input) {
    let text = input.shift().split(" ");
    input.pop();
    for (let command of input) {
        let token = command.split(" ");
        if (token[0] == "Delete") {
            let index = +token[1];
            if (text[index + 1] !== undefined) {
                text.splice(index + 1, 1);
            }

        } else if (token[0] == "Swap") {
            let word1 = token[1];
            let word2 = token[2];
            if (text.includes(word1) && text.includes(word2)) {
                let index1 = text.indexOf(word1);
                let index2 = text.indexOf(word2);
                text.splice(index1, 1, word2);
                text.splice(index2, 1, word1);
            }

        } else if (token[0] == "Put") {
            let word = token[1];
            let index = +token[2];
            if (text[index - 1] !== undefined) {
                text.splice(index - 1, 0, word);
            } else if (index === text.length) {
                text.push(word);
            }

        } else if (token[0] == "Sort") {
            text.sort();
            text.reverse();

        } else if (token[0] == "Replace") {
            let word1 = token[1];
            let word2 = token[2];
            if (text.includes(word2)) {
                let index = text.indexOf(word2);
                text.splice(index, 1, word1);
            }
        }
    }

    console.log(text.join(" "));
}

solve(["Congratulations! You last also through the have challenge!",
    "Swap have last",
    "Replace made have",
    "Delete 2",
    "Put it 4",
    "Stop"]);
