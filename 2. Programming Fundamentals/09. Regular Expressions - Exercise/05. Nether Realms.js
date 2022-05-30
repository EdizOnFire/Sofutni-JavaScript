function solve(input) {
    let regEx = /[^," "\n]+/gm;
    input = input.match(regEx);
    input = input.sort();
    let letterFinder = /[^\d\+\-\*\/.]/g;
    let numberFinder = /[-|+]?[0-9]+\.?[0-9]*/g;
    let symbolFinder = /[\*|\/]/g;
    for (let name of input) {
        let health = 0;
        let letters = name.match(letterFinder);
        let damage = 0;
        let numbers = name.match(numberFinder);
        let symbols = name.match(symbolFinder);
        if (numbers === null) {
            numbers = 0;
        } else {
            for (let number of numbers) {
                damage += +number;
            }
        }

        for (let char of letters) {
            health += char.charCodeAt();
        }

        if (symbols !== null) {
            for (let symbol of symbols) {
                if (symbol === "*") {
                    damage *= 2;
                } else if (symbol === "/") {
                    damage /= 2;
                }
            }
        }

        console.log(`${name} - ${health} health, ${damage.toFixed(2)} damage`);
    }
}

solve("M3ph1st0**, Azazel");
