import { html, render } from "../node_modules/lit-html/lit-html.js";
export const selectHome = (data) => html`<button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Harry Potter</td>
            <td>J. K. Rowling</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
        <tr>
            <td>Game of Thrones</td>
            <td>George R. R. Martin</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    </tbody>
</table>
<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
<form id="edit-form" style="display: none;">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>`

const url = "http://localhost:3030/jsonstore/collections/books";
const options = Object.values(await getData());
update(options);

let currentElement;
document.querySelector("#loadBooks").addEventListener("click", onLoad);
document.querySelector("input[type='submit']").addEventListener("click", onSubmit);
document.querySelector('input[value="Save"]').addEventListener("click", onSave);

async function onLoad(e) {
    e.preventDefault();
    const books = await getData(url);
    const rows = Object.entries(books).map(createRow).join("");
    document.querySelector("tbody").innerHTML = rows;

    document
        .querySelectorAll(".deleteBtn")
        .forEach((b) => b.addEventListener("click", onDelete));
    document
        .querySelectorAll(".editBtn")
        .forEach((b) => b.addEventListener("click", onEdit));
}

async function onSubmit(e) {
    e.preventDefault();
    const titleElement = document.querySelector('input[name="title"]');
    const authorElement = document.querySelector('input[name="author"]');
    const book = {
        title: titleElement.value,
        author: authorElement.value,
    };

    if (book.title == "" || book.author == "") {
        return alert("All fields are required!");
    }

    const response = await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
    });

    titleElement.value = "";
    authorElement.value = "";
}

async function onEdit(e) {
    document.getElementById("add-form").style.display = "none";
    document.getElementById("edit-form").style.display = "block";

    currentElement = e.target.parentNode.parentNode;
    const title = currentElement.children[0].textContent;
    const author = currentElement.children[1].textContent;
    document.querySelector('#edit-form input[name="title"]').value = title;
    document.querySelector('#edit-form input[name="author"]').value = author;
}

async function onSave(e) {
    e.preventDefault();
    const title = document.querySelector('#edit-form input[name="title"]');
    const author = document.querySelector('#edit-form input[name="author"]');

    if (title.value == "" || author.value == "") {
        return alert("All fields are required!");
    }

    const response = await fetch(`${url}/${currentElement.id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: title.value,
            author: author.value,
        }),
    });

    const row = document.getElementById(currentElement.id);
    row.children[0].textContent = title.value;
    row.children[1].textContent = author.value;
    title.value = "";
    author.value = "";
}

async function onDelete(e) {
    currentElement = e.target.parentNode.parentNode;
    currentElement.remove();

    const deleteResponse = await fetch(`${url}/${currentElement.id}`, {
        method: "DELETE",
    });
}

function createRow([id, book]) {
    const result = `
        <tr id="${id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>`;
    return result;
}

async function getData() {
    const response = await fetch(url);
    return await response.json();
}

function update(options) {
    const bodyElement = document.querySelector("body");
    const result = selectHome(options);
    render(result, bodyElement);
}