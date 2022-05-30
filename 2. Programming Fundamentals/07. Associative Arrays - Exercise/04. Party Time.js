function solve(input) {
    let guests = {
        vip: [],
        regular: [],
    };

    let guest = input.shift();
    while (guest !== "PARTY") {
        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            guests.vip.push(guest);
        } else {
            guests.regular.push(guest);
        }

        guest = input.shift();
    }

    for (let guest of input) {
        if (guests.vip.includes(guest)) {
            let index = guests.vip.indexOf(guest);
            guests.vip.splice(index, 1);

        } else if (guests.regular.includes(guest)) {
            let index = guests.regular.indexOf(guest);
            guests.regular.splice(index, 1);
        }
    }

    console.log(guests.vip.length + guests.regular.length);
    guests.regular.forEach((g) => console.log(g));
    guests.vip.forEach((g) => console.log(g));
}

solve(["7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",]);
