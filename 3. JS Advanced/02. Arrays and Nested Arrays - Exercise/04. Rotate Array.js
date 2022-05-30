function solve(array, n) {
    for (let i = 0; i < n; i++) {
        let element = array.pop()
        array.unshift(element)
    }

    let line = ""
    array.forEach(el => line+= el + " ")
    console.log(line);
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15) 