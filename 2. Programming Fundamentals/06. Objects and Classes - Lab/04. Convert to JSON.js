function solve(fn, ln, cl) {
    let person = { "name": fn, "lastName": ln, "hairColor": cl }
    console.log(JSON.stringify(person));
}

solve('George', 'Jones', 'Brown');