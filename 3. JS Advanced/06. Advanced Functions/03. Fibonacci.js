function solve() {
    let [a, b] = [0, 1];
    return () => {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}

let fib = solve();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());