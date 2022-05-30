window.addEventListener("load", solve);

function solve() {
    const modelInputElement = document.getElementById("model");
    const yearInputElement = document.getElementById("year");
    const descriptionInputElement = document.getElementById("description");
    const priceInputElement = document.getElementById("price");
    const furnitureList = document.getElementById("furniture-list");
    const addButtonElement = document.getElementById("add");
    const totalPriceElement = document.querySelector(".total-price");

    addButtonElement.addEventListener("click", (e) => {
        e.preventDefault();
        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(priceInputElement.value);

        modelInputElement.value = "";
        descriptionInputElement.value = "";
        yearInputElement.value = "";
        priceInputElement.value = "";

        if (year <= 0 || price <= 0 || model === "" || description === "") {
            return;
        }

        let informationLine = document.createElement("tr");
        let modelTree = document.createElement("td");
        let priceTree = document.createElement("td");
        let buttonTree = document.createElement("td");
        let moreBtn = document.createElement("button");
        let buyBtn = document.createElement("button");
        let additionalInformationLine = document.createElement("tr");
        let yearTree = document.createElement("td");
        let descriptionTree = document.createElement("td");

        modelTree.textContent = model;
        priceTree.textContent = price.toFixed(2);
        yearTree.textContent = `Year: ${year}`;
        descriptionTree.textContent = `Description: ${description}`;
        descriptionTree.colSpan = "3";
        moreBtn.textContent = "More Info";
        buyBtn.textContent = "Buy it";
        moreBtn.classList.add("moreBtn");
        buyBtn.classList.add("buyBtn");

        moreBtn.addEventListener("click", (m) => {
            if (m.currentTarget.textContent === "More Info") {
                m.currentTarget.textContent = "Less Info";
                additionalInformationLine.style.display = "contents";
            } else {
                m.currentTarget.textContent = "More Info";
                additionalInformationLine.style.display = "none";
            }
        });

        buyBtn.addEventListener("click", (c) => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            informationLine.remove();
            additionalInformationLine.remove();
        });

        buttonTree.appendChild(moreBtn);
        buttonTree.appendChild(buyBtn);

        informationLine.classList.add("info");
        informationLine.appendChild(modelTree);
        informationLine.appendChild(priceTree);
        informationLine.appendChild(buttonTree);

        additionalInformationLine.classList.add("hide");
        additionalInformationLine.style.display = "none";
        additionalInformationLine.appendChild(yearTree);
        additionalInformationLine.appendChild(descriptionTree);

        furnitureList.appendChild(informationLine);
        furnitureList.appendChild(additionalInformationLine);
    });
}
