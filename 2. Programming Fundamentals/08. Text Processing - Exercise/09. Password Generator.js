function solve(input) {
    let thirdStr = input.pop().toUpperCase()
    let regEx = /[euioa]/g
    let arr = []
    let i = 0;
    for (let command of input) {
        let match = command.match(regEx)
        
        for (let str of command) {
            
            if (match.includes(str)) {
                command = command.replace(str, thirdStr[i]);
                i++;
                if (i === thirdStr.length) {
                    i = 0
                }
            }
        }
        
        arr.push(command)
    }

    arr = arr.join("").split("").reverse().join("")
    console.log(`Your generated password is ${arr}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange'])