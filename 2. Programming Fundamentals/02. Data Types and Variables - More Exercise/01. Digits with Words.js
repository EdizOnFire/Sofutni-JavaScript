function solve(num) {
    let n = 0
    switch (num) {
        case 'zero': n = 0; break;
        case 'one': n = 1; break;
        case 'two': n = 2; break;
        case 'three': n = 3; break;
        case 'four': n = 4; break;
        case 'five': n = 5; break;
        case 'six': n = 6; break;
        case 'seven': n = 7; break;
        case 'eight': n = 8; break;
        case 'nine': n = 9; break;
    }

    console.log(n);
}

solve('nine')
