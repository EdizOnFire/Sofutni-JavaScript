window.addEventListener('load', solution);

function solution() {
  const fullNameInput = document.getElementById('fname');
  const emailInput = document.getElementById('email');
  const phoneNumberInput = document.getElementById('phone');
  const addressInput = document.getElementById('address');
  const postalCodeInput = document.getElementById('code');
  const infoFieldElement = document.getElementById('infoPreview');
  const submitButton = document.getElementById('submitBTN');
  const editButton = document.getElementById('editBTN');
  const continueButton = document.getElementById('continueBTN');

  let fullName = '';
  let email = '';
  let number = '';
  let address = '';
  let postalCode = '';

  let nameTree = document.createElement('li');
  let emailTree = document.createElement('li');
  let numberTree = document.createElement('li');
  let addressTree = document.createElement('li');
  let postalTree = document.createElement('li');

  submitButton.addEventListener('click', (e) => {
    fullName = fullNameInput.value;
    email = emailInput.value;
    number = phoneNumberInput.value;
    address = addressInput.value;
    postalCode = postalCodeInput.value;
    if (!fullName || !email) {
      return;
    }

    nameTree.textContent = `Full Name: ${fullName}`;
    emailTree.textContent = `Email: ${email}`;
    numberTree.textContent = `Phone Number: ${number}`;
    addressTree.textContent = `Address: ${address}`;
    postalTree.textContent = `Postal Code: ${postalCode}`;

    infoFieldElement.appendChild(nameTree);
    infoFieldElement.appendChild(emailTree);
    infoFieldElement.appendChild(numberTree);
    infoFieldElement.appendChild(addressTree);
    infoFieldElement.appendChild(postalTree);

    fullNameInput.value = '';
    emailInput.value = '';
    phoneNumberInput.value = '';
    addressInput.value = '';
    postalCodeInput.value = '';

    submitButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
  });

  editButton.addEventListener('click', (e) => {
    fullNameInput.value = fullName
    emailInput.value = email
    phoneNumberInput.value = number
    addressInput.value = address
    postalCodeInput.value = postalCode

    nameTree.remove();
    emailTree.remove();
    numberTree.remove();
    addressTree.remove();
    postalTree.remove();

    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;
  });

  continueButton.addEventListener('click', (e) => {
    let blockElement = document.getElementById('block');
    blockElement.remove()
    let newBlockElement = document.createElement('div');
    newBlockElement.id = 'block'
    let bodyElement = document.querySelector('body');
    let newHeader = document.createElement('h3');
    newHeader.textContent = 'Thank you for your reservation!'
    newBlockElement.appendChild(newHeader);
    bodyElement.appendChild(newBlockElement)
  });
}
