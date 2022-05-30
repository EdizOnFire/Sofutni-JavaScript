function solve(input) {
    let result = [];
    for (let element of input.split(" ")) {
        if (element[0] === "#" && element.length !== 1) {
            result.push(element.substring(1));
        }
    }

    let final = [];

    for (let arr of result) {
        let array = arr.split("");
        let hasNoLetters = true;
        for (let i = 0; i < array.length; i++) {
            let currentCode = array[i].charCodeAt(0);
            if ((currentCode < 97 || currentCode > 122) && (currentCode < 65 || currentCode > 90)) {
                hasNoLetters = false;
            }
        }

        if (hasNoLetters) {
            final.push(arr);
        }
    }

    final.forEach((a) => console.log(a));
}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
