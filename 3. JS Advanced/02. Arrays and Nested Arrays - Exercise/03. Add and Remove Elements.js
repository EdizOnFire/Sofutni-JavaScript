function solve(array) {
    let n = 1;
    let newArray = []
    for (let command of array) {
        if (command === 'add') {
            newArray.push(n)
        } else if (command === 'remove') {
            newArray.pop()
        }

        n++
    }

    if (newArray.length > 0) {
        newArray.forEach(num => console.log(num))
    } else (
        console.log('Empty')
    )
}

solve(['add', 
'add', 
'remove', 
'add', 
'add'])