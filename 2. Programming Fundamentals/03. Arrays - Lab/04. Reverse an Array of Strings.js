function solve(array) {
    let arrays = ""
    for (let i = array.length - 1; i >= 0; i--) {
        arrays += array[i] + " "
    }
    
    console.log(arrays);
}

solve(['33', '123', '0', 'dd'])