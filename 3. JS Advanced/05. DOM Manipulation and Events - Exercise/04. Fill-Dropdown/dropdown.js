function addItem() {
    let textInput = document.getElementById('newItemText').value;
    let valueInput = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.text = textInput;
    option.value = valueInput;

    let menu = document.getElementById('menu');
    if (textInput !== '' && valueInput !== '') {
        menu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}