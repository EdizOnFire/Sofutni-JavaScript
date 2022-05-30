function solve() {
    const list = [];
    return {
        add(num) {
            if (typeof num === "number") {
                list.push(num);
                list.sort((a, b) => a - b);
            } else {
                console.log("The array takes only numbers.");
            }
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            } else {
                console.error("The index is outside the bounds of the array");
            }
        },
        get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            } else {
                console.error("The index is outside the bounds of the array");
            }
        },
        get size() {
            return list.length;
        },
    };
}

solve();
