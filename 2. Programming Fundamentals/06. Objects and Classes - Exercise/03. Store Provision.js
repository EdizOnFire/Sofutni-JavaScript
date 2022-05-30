function solve(arr1, arr2) {
    let storeProducts = { product: "", quantity: "" };
    let orderProducts = { product: "", quantity: "" };
    let sameProducts = false
    let j = 0
    for (let i = 0; i < arr1.length; i++) {
        let storeProductName = arr1[i++];
        let storeProductQuantity = Number(arr1[i]);
        storeProducts = { product: storeProductName, quantity: storeProductQuantity };
        while (j < arr2.length) {
            let orderProductName = arr2[j++];
            let orderProductQuantity = Number(arr2[j]);
            orderProducts = { product: orderProductName, quantity: orderProductQuantity };
            if (storeProducts.product === orderProducts.product) {
                sameProducts = true
                break;
            }
            j++;
        }

        if (sameProducts) {
            console.log(`${storeProducts.product} -> ${storeProducts.quantity + orderProducts.quantity}`);
            let index = arr2.indexOf(storeProducts.product)
            arr2.splice(index, 2)
        } else {
            console.log(`${storeProducts.product} -> ${storeProducts.quantity}`);
        }

        sameProducts = false
        j = 0
    }

    for (let i = 0; i < arr2.length; i++) {
        let orderProductName = arr2[i++];
        let orderProductQuantity = Number(arr2[i]);
        orderProducts = { product: orderProductName, quantity: orderProductQuantity };
        console.log(`${orderProducts.product} -> ${orderProducts.quantity}`);
    }
}

solve(["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]);
