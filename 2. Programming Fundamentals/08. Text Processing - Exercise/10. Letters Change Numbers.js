function solve(input) {
    input = input.match(/[^" "]+/g);
    let regEx = /[A-Z]/;
    let result = 0;
    for (let command of input) {
        command = command.split("");
        let currentResult = 0;
        let firstStr = command.shift();
        let lastStr = command.pop();
        let number = +command.join("");
        let firstMatch = regEx.exec(firstStr);
        let lastMatch = regEx.exec(lastStr);
        if (firstMatch !== null) {
            firstStr = firstStr.charCodeAt() - 64;
            currentResult += number / firstStr;
            if (lastMatch !== null) {
                lastStr = lastStr.charCodeAt() - 64;
                currentResult -= lastStr;
            } else {
                lastStr = lastStr.charCodeAt() - 96;
                currentResult += lastStr;
            }
        } else {
            firstStr = firstStr.charCodeAt() - 96;
            currentResult += number * firstStr;
            if (lastMatch !== null) {
                lastStr = lastStr.charCodeAt() - 64;
                currentResult -= lastStr;
            } else {
                lastStr = lastStr.charCodeAt() - 96;
                currentResult += lastStr;
            }
        }

        result += currentResult;
    }

    console.log(result.toFixed(2));
}

solve("P34562Z q2576f   H456z");
