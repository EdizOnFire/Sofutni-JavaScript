function solve(str) {
    let newStr = []
    str = str.split("")
    let printLine = ""
    for (let letter of str) {
        if (newStr.includes(letter)) {
            let index = newStr.length - 1
            if (newStr[index] !== letter) {
                newStr.push(letter)
                printLine += `${letter}` 
            }

        } else if (!newStr.includes(letter)) {
            newStr.push(letter)
            printLine += `${letter}`
        }
    }

    console.log(printLine);
}

solve('aaaaabbbbbcdddeeeedssaa')