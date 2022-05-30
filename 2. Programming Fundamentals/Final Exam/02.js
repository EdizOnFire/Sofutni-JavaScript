function solve(input) {

    let regEx = /(.+)>(?<part1>[0-9]{3})\|(?<part2>[a-z]{3})\|(?<part3>[A-Z]{3})\|(?<part4>[^\>\<]{3})<\1/;
    input.shift();
    for (let password of input) {
        let arr = regEx.exec(password);
        if (arr !== null) {
            console.log(`Password: ${arr[2]}${arr[3]}${arr[4]}${arr[5]}`);
        } else {
            console.log('Try another password!');
        }
    }
}

solve(["3",
    "##>00|no|NO|!!!?<###",
    "##>123|yes|YES|!!!<##",
    "$$<111|noo|NOPE|<<>$$"])