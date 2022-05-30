function solve(num, command1, command2, command3, command4, command5) {
    num = Number(num)
    let array = []
    array[0] = command1
    array[1] = command2
    array[2] = command3
    array[3] = command4
    array[4] = command5

    for (let command of array) {
        if (command === "chop") {
            num /= 2
        } else if (command === "dice") {
            num = Math.sqrt(num)
        } else if (command === "spice") {
            num++
        } else if (command === "bake") {
            num *= 3
        } else if (command === "fillet") {
            num -= num * .20
        }

        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');