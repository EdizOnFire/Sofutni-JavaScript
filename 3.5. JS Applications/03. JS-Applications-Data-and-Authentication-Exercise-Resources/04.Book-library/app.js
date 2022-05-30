const url = "http://localhost:3030/jsonstore/collections/books";
const tableElement = document.querySelector("table");
const textBodyElement = document.querySelector("tbody");
const authorInputElement = document.querySelector('input[name="author"]');
const titleInputElement = document.querySelector('input[name="title"]');
const submitButtonElement = document.querySelector("form button");
const formNameElement = document.querySelector("form h3");
const loadBooksElement = document.querySelector("#loadBooks");
const newTextBodyElement = document.createElement("tbody");
submitButtonElement.setAttribute("type", "button");

for (let element of textBodyElement.children) {
    const editElement = element.children[2].children[0];
    const deleteElement = element.children[2].children[1];
    editElement.addEventListener("click", editRow);
    deleteElement.addEventListener("click", deleteRow);
}

let currentElement;

async function solve() {
    loadBooksElement.addEventListener("click", loadBooks);
    submitButtonElement.addEventListener("click", submit);
}

async function loadBooks() {
    newTextBodyElement.innerHTML = "";

    const data = await getData(url);
    Object.values(data).forEach((e) => {
        createElement(e);
    });

    tableElement.appendChild(newTextBodyElement);
}

function createElement(s) {
    const author = s.author;
    const title = s.title;
    const tr = document.createElement("tr");
    const titleTd = document.createElement("td");
    const authorTd = document.createElement("td");
    const buttonsTd = document.createElement("td");
    const editButtonElement = document.createElement("button");
    const deleteButtonElement = document.createElement("button");
    titleTd.textContent = title;
    authorTd.textContent = author;
    editButtonElement.textContent = "Edit";
    deleteButtonElement.textContent = "Delete";

    editButtonElement.addEventListener("click", editRow);
    deleteButtonElement.addEventListener("click", deleteRow);

    buttonsTd.appendChild(editButtonElement);
    buttonsTd.appendChild(deleteButtonElement);
    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(buttonsTd);
    newTextBodyElement.appendChild(tr);
}

async function deleteRow(e) {
    currentElement = e.target.parentNode.parentNode;
    e.target.parentNode.parentNode.remove();
    const deleteResponse = await fetch(`${url}/${currentElement.id}`, {
        method: "DELETE",
    });
}

async function getData(urlInput) {
    const response = await fetch(urlInput);
    return response.json();
}

async function editRow(e) {
    formNameElement.textContent = "Edit FORM";
    const currentTitle = e.target.parentNode.parentNode.children[0].textContent;
    const currentAuthor = e.target.parentNode.parentNode.children[1].textContent;

    currentElement = e.target.parentNode.parentNode;

    authorInputElement.value = currentAuthor;
    titleInputElement.value = currentTitle;

    submitButtonElement.textContent = "Save";
}

async function submit() {
    if (authorInputElement.value === "" || titleInputElement.value === "") {
        return;
    }

    if (submitButtonElement.textContent === "Save") {
        formNameElement.textContent = "FORM";
        submitButtonElement.textContent = "Submit";
        currentElement.children[0].textContent = titleInputElement.value;
        currentElement.children[1].textContent = authorInputElement.value;
        const editResponse = await fetch(`${url}/${currentElement.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                author: titleInputElement.value,
                title: authorInputElement.value,
            }),
        });

        authorInputElement.value = "";
        titleInputElement.value = "";
        return;
    }

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            author: authorInputElement.value,
            title: titleInputElement.value,
        }),
    });

    const data = await response.json();

    const tr = document.createElement("tr");
    const titleTd = document.createElement("td");
    const authorTd = document.createElement("td");
    const buttonsTd = document.createElement("td");
    const editButtonElement = document.createElement("button");
    const deleteButtonElement = document.createElement("button");

    tr.setAttribute("id", data._id);
    titleTd.textContent = titleInputElement.value;
    authorTd.textContent = authorInputElement.value;
    editButtonElement.textContent = "Edit";
    deleteButtonElement.textContent = "Delete";

    editButtonElement.addEventListener("click", editRow);
    deleteButtonElement.addEventListener("click", deleteRow);

    buttonsTd.appendChild(editButtonElement);
    buttonsTd.appendChild(deleteButtonElement);
    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(buttonsTd);
    newTextBodyElement.appendChild(tr);

    authorInputElement.value = "";
    titleInputElement.value = "";
}

solve();
