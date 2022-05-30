function solve() {
    const firstNameElement = document.getElementById('fname')
    const lastNameElement = document.getElementById('lname')
    const emailElement = document.getElementById('email')
    const birthElement = document.getElementById('birth')
    const positionElement = document.getElementById('position')
    const salaryElement = document.getElementById('salary')n  
    const hireButtonElement = document.getElementById('add-worker')
    const textBodyElement = document.getElementById('tbody')
    const sumElement = document.getElementById('sum')

    let firstName;
    let lastName;
    let email;
    let birth;
    let position;
    let salary;
    let sum;

    hireButtonElement.addEventListener('click', (e) => {
        e.preventDefault();
        firstName = firstNameElement.value;
        lastName = lastNameElement.value;
        email = emailElement.value;
        birth = birthElement.value;
        position = positionElement.value;
        salary = salaryElement.value;
        sum = sumElement.textContent;

        const firedButton = document.createElement('button');
        const editButton = document.createElement('button');


        if (!firstName || !lastName || !email || !birth || !position || !salary) {
            return;
        }

        let currentSum = Number(sum)
        currentSum += Number(salary);
        sumElement.textContent = `${currentSum.toFixed(2)}`;

        let firstNameTree = document.createElement('td')
        let lastNameTree = document.createElement('td')
        let emailTree = document.createElement('td')
        let birthTree = document.createElement('td')
        let positionTree = document.createElement('td')
        let salaryTree = document.createElement('td')


        let buttonTree = document.createElement('td')
        firedButton.textContent = 'Fired'
        editButton.textContent = 'Edit'
        firedButton.classList.add("fired");
        editButton.classList.add("edit");
        buttonTree.appendChild(firedButton)
        buttonTree.appendChild(editButton)

        firstNameTree.textContent = firstName
        lastNameTree.textContent = lastName
        emailTree.textContent = email
        birthTree.textContent = birth
        positionTree.textContent = position
        salaryTree.textContent = salaryElement.value

        let tr = document.createElement('tr')
        tr.appendChild(firstNameTree)
        tr.appendChild(lastNameTree)
        tr.appendChild(emailTree)
        tr.appendChild(birthTree)
        tr.appendChild(positionTree)
        tr.appendChild(salaryTree)
        tr.appendChild(buttonTree)

        textBodyElement.appendChild(tr)

        firstNameElement.value = ''
        lastNameElement.value = ''
        emailElement.value = ''
        birthElement.value = ''
        positionElement.value = ''
        salaryElement.value = ''

        editButton.addEventListener('click', (e) => {
            firstNameElement.value = firstName
            lastNameElement.value = lastName
            emailElement.value = email
            birthElement.value = birth
            positionElement.value = position
            salaryElement.value = salaryTree.textContent
            currentSum = Number(sumElement.textContent)
            currentSum -= Number(salaryTree.textContent);
            sumElement.textContent = `${currentSum.toFixed(2)}`;

            tr.remove();
        })

        firedButton.addEventListener('click', (e) => {
            currentSum = Number(sumElement.textContent)
            currentSum -= Number(salaryTree.textContent);
            sumElement.textContent = `${currentSum.toFixed(2)}`;
            tr.remove();
        })
    })
}

solve()