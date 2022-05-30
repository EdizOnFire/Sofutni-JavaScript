function solve(input) {
    input.pop()
    let rawKey = input.shift()

    for (let command of input) {
        command = command.split(">>>")
        if (command[0] === "Contains") {
            if (rawKey.includes(command[1])) {
                console.log(`${rawKey} contains ${command[1]}`);
            } else {
                console.log('Substring not found!');
            }

        } else if (command[0] === "Flip") {
            let startIndex = +command[2]
            let endIndex = +command[3]
            if (command[1] === "Upper") {
                let action = rawKey.slice(startIndex, endIndex)
                rawKey = rawKey.replace(action, action.toUpperCase())
                console.log(rawKey);
            } else if (command[1] === "Lower") {
                let action = rawKey.slice(startIndex, endIndex)
                rawKey = rawKey.replace(action, action.toLowerCase())
                console.log(rawKey);
            }

        } else if (command[0] === "Slice") {
            let startIndex = +command[1]
            let endIndex = +command[2]
            action = rawKey.slice(startIndex, endIndex)
            rawKey = rawKey.replace(action, "")
            console.log(rawKey);
        }
    }

    console.log(`Your activation key is: ${rawKey}`);
}

solve((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]))