class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let addedVegetables = [];
        for (let vegetable of vegetables) {
            vegetable = vegetable.split(' ');
            let type = vegetable[0];
            let quantity = Number(vegetable[1]);
            let price = Number(vegetable[2]);
            for (let otherVegetable of this.availableProducts) {
                if (otherVegetable.type === type) {
                    otherVegetable.quantity += quantity;
                    if (otherVegetable.price < price) {
                        otherVegetable.price = price;
                        break;
                    }
                } else if (!addedVegetables.includes(type)) {
                    this.availableProducts.push({ type, quantity, price });
                    addedVegetables.push(type);
                    break;
                }
            }

            if (this.availableProducts.length === 0) {
                this.availableProducts.push({ type, quantity, price });
                addedVegetables.push(type);
            }
        }

        addedVegetables = addedVegetables.join(', ')
        return `Successfully added ${addedVegetables}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (let vegetable of selectedProducts) {
            vegetable = vegetable.split(' ');
            let haveVegetable = false
            let type = vegetable[0];
            let quantity = Number(vegetable[1]);
            for (let otherVegetable of this.availableProducts) {
                if (type === otherVegetable.type) {
                    haveVegetable = true;
                    if (otherVegetable.quantity < quantity) {
                        throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                    }

                    otherVegetable.quantity -= quantity;
                    totalPrice += quantity * otherVegetable.price;
                    break;
                }
            }

            if (!haveVegetable) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        for (let vegetable of this.availableProducts) {
            let isAvailable = false;
            if (vegetable.type === type) {
                isAvailable = true;
                if (vegetable.quantity < quantity) {
                    vegetable.quantity = 0;
                    return (`The entire quantity of the ${type} has been removed.`)
                } else {
                    vegetable.quantity -= quantity;
                    return `Some quantity of the ${type} has been removed.`;
                }
            }

            if (!isAvailable) {
                throw new Error(`${type} is not available in the store.`)
            }
        }
    }

    revision() {
        let result = ["Available vegetables:"];
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach((v) => {
                result.push(`${v.type}-${v.quantity}-$${v.price}`);
            });
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n');
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


//Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.

