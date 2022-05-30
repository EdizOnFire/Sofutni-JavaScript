function solve(input) {
    let regex = /[\w]+/g;
    let found = input.match(regex);
    found = found.join(", ");
    found = found.toUpperCase();
    
    console.log(found);
}

solve('Hi, how are you?')