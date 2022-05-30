function solve(array) {
    array = array.sort((a, b) => a - b);
    let newArr = [];
    while (array.length !== 0) {
        let smallest = array.shift();
        let biggest = array.pop();
        newArr.push(smallest);
        newArr.push(biggest);
    }
    
    return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])