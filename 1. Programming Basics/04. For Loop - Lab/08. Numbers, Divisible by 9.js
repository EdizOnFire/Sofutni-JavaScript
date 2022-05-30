function asd(osman) {
    let a = Number(osman[0]);
    let b = Number(osman[1]);
    let sum = 0;

    for (let i = a; i < b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (i = a; i < b; i++) {
        if (i % 9 === 0) {
            console.log(i);
        }
    }
}
asd(['100', '200'])