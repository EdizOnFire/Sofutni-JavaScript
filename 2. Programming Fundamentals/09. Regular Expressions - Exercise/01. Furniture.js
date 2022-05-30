function furniture(data) {
    let pattern = /(?<furniture>[\w]+)<<(?<price>\d+(?:\.?\d+)?)!(?<quantity>\d+)/
    let command = data.shift();
    let furniture = [];
    let moneyTotal = 0;

    while (command !== "Purchase") {
        let match = pattern.exec(command);
        if (match !== null) {
            furniture.push(match.groups["furniture"]);
            let currMoney = Number(match.groups["price"]);
            let quantity = Number(match.groups["quantity"]);
            moneyTotal += currMoney * quantity;
        }

        command = data.shift();
    }

    console.log("Bought furniture:");

    if (furniture.length > 0) {
        console.log(furniture.join("\n"));
    }

    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
