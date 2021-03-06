class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let vegetableType = [];
        for (const prod of vegetables) {
            let [type, quantity, price] = prod.split(" ");
            quantity = Number(quantity);
            price = Number(price);
            let typeProd = this.availableProducts.find(x => x.type === type);
            if (!typeProd) {
                this.availableProducts.push({ type, quantity, price });
                vegetableType.push(type)
            } else {
                typeProd.quantity += quantity;
                if (typeProd.price < price) {
                    typeProd.price = price;
                }
            }
        }

        return `Successfully added ${vegetableType.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach((p) => {
            let [type, quantity] = p.split(' ');
            let typeProd = this.availableProducts.find(x => x.type === type);
            if (!typeProd) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > typeProd.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += typeProd.price * quantity;
            typeProd.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let typeProd = this.availableProducts.find(x => x.type === type);
        if (!typeProd) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > typeProd.quantity) {
            typeProd.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        };
        typeProd.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let result = this.availableProducts.sort((a, b) => a.price - b.price)
            .reduce((acc, element) => {
                acc.push(`${element.type}-${element.quantity}-$${element.price}`);
                return acc;
            }, []);
        return `Available vegetables:\n${result.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
    }
}
