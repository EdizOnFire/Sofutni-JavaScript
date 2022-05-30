function solve(array) {
    array.sort((a, b) => {
        a.length - b.length || a.localeCompare(b)
    });
    array.forEach((el) => console.log(el));
}

solve(["alpha", "beta", "gamma"]);
