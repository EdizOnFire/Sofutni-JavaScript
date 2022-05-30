function solve(input) {
    let bodyText = input[0];
    let fillers = input[1];
    let count = 0;
    for (let char of bodyText) {
        if (char === "_") {
            count++
        } else if (char !== "_" && count > 0) {
            for (let word of fillers) {
                if (word.length === count) {
                    let toReplace = "_".repeat(count);
                    bodyText = bodyText.replace(toReplace, word);
                    count = 0;
                }
            }
        }
    }

    console.log(bodyText);
}

solve(['Hi, _______! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['grandma', 'pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])