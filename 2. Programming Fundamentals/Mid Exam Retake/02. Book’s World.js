function solve(input) {
    input.pop()
    let genres = input.shift().split(" | ")
    for (let command of input) {
        command = command.split(" ")
        if (command[0] === "Join") {
            let genre = command[1]
            if (!genres.includes(genre)) {
                genres.push(genre)
            }
        }

        if (command[0] === "Drop") {
            let genre = command[1]
            if (genres.includes(genre)) {
                let index = genres.indexOf(genre);
                genres.splice(index, 1)
            }
        }

        if (command[0] === "Replace") {
            let genre = command[1]
            let newGenre = command[2]
            if (genres.includes(genre) && !genres.includes(newGenre)) {
                let index = genres.indexOf(genre);
                genres.splice(index, 1, newGenre)
            }
        }

        if (command[0] === "Prefer") {
            let index1 = command[1]
            let index2 = command[2]
            if (genres[index1] !== undefined && genres[index2] !== undefined) {
                let genre1 = genres[index1]
                let genre2 = genres[index2]
                genres.splice(index1, 1, genre2)
                genres.splice(index2, 1, genre1)
            }
        }
    }

    console.log(genres.join(" "));
}

solve(["Romance | Fiction | Horror | Mystery",
"Drop Romance",
"Prefer 3 2",
"Join Fantasy",
"Prefer 2 1",
"Stop!"])