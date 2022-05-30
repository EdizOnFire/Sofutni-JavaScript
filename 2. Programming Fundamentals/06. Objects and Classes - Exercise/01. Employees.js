function solve(arr) {
    let employeeName = "";
    let personalNum = 0;

    for (let i = 0; i < arr.length; i++) {
        employeeName = arr[i];
        personalNum = arr[i].length;
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
}

solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
