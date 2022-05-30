function solve(arr) {
    let games = arr.shift();
    let newArr = games.split(" ")
    for (let command of arr) {
        let tokens = command.split(" ");
        let commandToken = tokens[0];
        let game = tokens[1];
        if (commandToken === "Install") {
            if (newArr.includes(game)) {
            } else {
                newArr.push(game);
            }

        } else if (commandToken === "Uninstall") {
            if (newArr.includes(game)) {
                let index = newArr.indexOf(game);
                newArr.splice(index, 1);
            }

        } else if (commandToken === "Update") {
            if (newArr.includes(game)) {
                let index = newArr.indexOf(game);
                newArr.splice(index, 1);
                newArr.push(game);
            }

        } else if (commandToken === "Expansion") {
            let gameExpansion = game.split("-");
            if (newArr.includes(gameExpansion[0])) {
                let index = newArr.indexOf(gameExpansion[0])
                newArr.splice(index + 1, 0, gameExpansion.join(":"))
            }

        } else if (command === "Play") {
            break;
        }
    }

    let printLine = ""
    for (let i = 0; i < newArr.length; i++) {
        printLine += newArr[i] + " "
    }

    console.log(printLine);
}

solve(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);
