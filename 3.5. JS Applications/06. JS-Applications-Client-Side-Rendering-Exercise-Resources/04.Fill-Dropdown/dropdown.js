import { html, render } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown'

async function getOptions() {
    const response = await fetch(url)
    return await response.json();
}

const selectTemplate = (data) => html`
<select id="menu">${data.map(e => html`<option value = ${e._id}>${e.text} </option>`)}
</select>`

const options = Object.values(await getOptions());
const main = document.querySelector('div');
update(options);

function update(options) {
    const result = selectTemplate(options);
    render(result, main);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();
    const text = document.querySelector('#itemText').value;
    if (text !== '') {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })

        options.push(await response.json());
        update(options);
    }

    document.querySelector('#itemText').value = ''
}