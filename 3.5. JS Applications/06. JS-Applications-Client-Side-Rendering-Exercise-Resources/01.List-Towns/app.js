import { html, render } from '../node_modules/lit-html/lit-html.js';

document.querySelector('#btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>`

function getTowns(e) {
    e.preventDefault();
    if (document.querySelector('#towns').value != '') {
        const root = document.querySelector('#root');
        const towns = document.querySelector('#towns').value.split(', ');
        const result = listTemplate(towns);
        render(result, root);
        document.querySelector('#towns').value = ''
    }
}