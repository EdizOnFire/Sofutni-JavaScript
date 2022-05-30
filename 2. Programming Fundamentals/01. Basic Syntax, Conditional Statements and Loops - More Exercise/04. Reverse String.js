function solve(str) {
let splitStr = str.split("")
let reverseStr = splitStr.reverse()
let joinStr = reverseStr.join("")

console.log(joinStr);
}

solve("Hello")