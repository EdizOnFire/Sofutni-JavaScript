function fruitOrVegetable(input) {
    switch (input[0]) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes': console.log('fruit'); break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
        case 'grapes': console.log('vegetable'); break;
        default: console.log('unknown'); break;
    }
}
fruitOrVegetable(['banana'])