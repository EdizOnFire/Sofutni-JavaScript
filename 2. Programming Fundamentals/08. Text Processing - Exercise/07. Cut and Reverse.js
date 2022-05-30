function solve(input) {
    input = input.split("");
    let half = Math.ceil(input.length / 2);
    let firstHalf = input.splice(0, half);
    let secondHalf = input.splice(-half);
    let newInput1 = [];
    let newInput2 = [];
    for (let letter of firstHalf) {
        newInput1.unshift(letter);
    }

    for (let letter of secondHalf) {
        newInput2.unshift(letter);
    }

    console.log(newInput1.join(""));
    console.log(newInput2.join(""));
}

solve("tluciffiDsIsihTgnizamAoSsIsihT");
