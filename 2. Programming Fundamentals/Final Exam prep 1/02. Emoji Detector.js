function solve(str) {
    let input = str[0];
    let emojiFinder = /(\*\*[A-Z][a-z]{2,}\*\*)|(\:\:[A-Z][a-z]{2,}\:\:)/g;
    let numberFinder = /\d/g;
    let digits = input.match(numberFinder);
    digits = digits.map((d) => +d);
    let coolness = digits.shift();
    for (let digit of digits) {
        coolness *= digit;
    }

    let emojis = input.match(emojiFinder);
    console.log(`Cool threshold: ${coolness}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    let coolEmojis = [];
    let emojiCleaner = /[^**::]+/g;
    for (let emoji of emojis) {
        let coolnessResult = 0;
        for (let letter of emoji.match(emojiCleaner)[0]) {
            coolnessResult += letter.charCodeAt();
        }

        if (coolness <= coolnessResult) {
            coolEmojis.push(`${emoji}`);
        }
    }

    coolEmojis.forEach((e) => console.log(e));
}

solve([
    "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::",
]);
