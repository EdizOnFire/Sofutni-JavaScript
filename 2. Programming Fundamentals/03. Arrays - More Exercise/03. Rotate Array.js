function solve(arr) {
    let rotations = arr.pop();
    let printLine = "";
    for (let i = 0; i < rotations; i++) {
        let removedArr = arr.pop();
        arr.unshift(removedArr);
    }

    for (let i = 0; i < arr.length; i++) {
        printLine += arr[i] + " ";
    }

    console.log(printLine);
}

solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
