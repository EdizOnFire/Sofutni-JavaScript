import { html, render } from "../node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/table'


async function getData() {
   const response = await fetch(url)
   return await response.json();
}

const selectTemplate = (data) => html`
${data.map(e => html`
<tr id='${e._id}'>
<th>${e.firstName} ${e.lastName}</th>
<th>${e.email}</th>
<th>${e.course}</th>
</tr>
`)}`

const options = Object.values(await getData());
const theadElement = document.querySelector('tbody')
update(options);

function update(options) {
   const result = selectTemplate(options);
   render(result, theadElement);
}

document.querySelector('#searchBtn').addEventListener('click', onClick);

function onClick(e) {
   e.preventDefault();
   const theadElements = document.querySelectorAll('tbody tr')
   const input = document.querySelector('#searchField').value;

   for (let row of theadElements) {
      row.classList.remove('select');
      if (input !== '' && row.textContent.toLowerCase().includes(input.toLowerCase())) {
         row.className = 'select'
      }
   }

   document.querySelector('#searchField').value = ''
}