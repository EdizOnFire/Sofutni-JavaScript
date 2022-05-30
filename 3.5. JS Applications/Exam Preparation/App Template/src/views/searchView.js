import { html } from "../../node_modules/lit-html/lit-html.js";
import { itemTemplate } from "../services/template.js";
import { searchItems } from "../services/data.js"

const searchTemplate = (searchHandler, cars) => html`
@click=${searchHandler} class="button-list">Search</button>
${cars.length > 0
? cars.map(x => itemTemplate(x))
: html`<p>No results.</p>`}`;

export const searchView = (ctx) => {
    // const searchHandler = (e) => {
    //     e.preventDefault()
    //     const searchElement = document.querySelector('');
    //     searchItems(searchElement.value)
    //         .then(cars => {
    //             ctx.render(searchTemplate(searchHandler, cars))
    //         })
    // }

    // ctx.render(searchTemplate(searchHandler, []))
}