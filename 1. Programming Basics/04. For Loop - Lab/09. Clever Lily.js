function forLoop(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let income = 0;

    for (let currentBday = 1; currentBday <= age; currentBday++) {
        if (currentBday % 2 !== 0) {
            toysCounter++;
        } else {
            stolenMoney++;
            savedMoney += 10;
            income += savedMoney
        }
    }
    let moneyFromToys = toysCounter * singleToyPrice;
    let finalIncome = (income + moneyFromToys - stolenMoney)
    if (finalIncome >= washingMachinePrice) {
        console.log(`Yes! ${(finalIncome - washingMachinePrice).toFixed(2)} `);
    } else {
        console.log(`No! ${(washingMachinePrice - finalIncome).toFixed(2)} `);
    }
}
forLoop(['21', '1570.98', '3'])