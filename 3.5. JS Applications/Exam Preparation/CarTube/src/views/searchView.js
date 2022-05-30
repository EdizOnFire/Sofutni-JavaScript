import { html } from "../../node_modules/lit-html/lit-html.js";
import { itemTemplate } from "../services/template.js";
import * as data from "../services/data.js"

const searchTemplate = (searchHandler, cars) => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${searchHandler} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">

       ${cars.length > 0
                ? cars.map(x => itemTemplate(x))
                : html`<p class="no-cars"> No results.</p>`}

    </div>
</section>`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        e.preventDefault()
        const searchElement = document.querySelector('#search-input');
        data.search(searchElement.value)
            .then(cars => {
                ctx.render(searchTemplate(searchHandler, cars))
            })
    }

    ctx.render(searchTemplate(searchHandler, []))
}