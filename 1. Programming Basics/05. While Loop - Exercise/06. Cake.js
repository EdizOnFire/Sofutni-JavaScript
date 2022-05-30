function cake(input) {
    let size1 = Number(input[0])
    let size2 = Number(input[1])
    let fullSize = size1 * size2
    let i = 2
    let command = input[i]
    let piecesOfCake = 0
    let eatenCake = 0
    while (command !== "STOP") {
        piecesOfCake = Number(command)
        eatenCake += piecesOfCake
        if (eatenCake > fullSize) {
            console.log(`No more cake left! You need ${eatenCake - fullSize} pieces more.`); break;
        }
        i++
        command = input[i]
    }
    
    if (command === "STOP") {
        console.log(`${fullSize - eatenCake} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

