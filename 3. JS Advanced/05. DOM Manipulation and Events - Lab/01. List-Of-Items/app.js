function addItem() {
    let input = document.getElementById('newItemText');
    let itemsList = document.getElementById('items');
    let li = document.createElement("li");
    li.textContent = input.value;
    itemsList.appendChild(li);
    input.value = ''
}