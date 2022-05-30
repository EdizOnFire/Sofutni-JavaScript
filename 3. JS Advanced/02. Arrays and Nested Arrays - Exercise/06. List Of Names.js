function solve(array) {
    array = array.sort((a, b) => a.localeCompare(b))
    let num = 1
    for (let word of array) {
        console.log(`${num}.${word}`);
        num++;
    }
}

solve(["John", "Bob", "Christina", "Ema"])