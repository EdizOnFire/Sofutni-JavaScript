import { html } from "../../node_modules/lit-html/lit-html.js";
import { albumTemplate } from "../services/albumTemplate.js";
import * as api from "../services/api.js"

const searchTemplate = (searchHandler, albums) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list" @click=${searchHandler}>Search</button>
    </div>

    <h2>Results:</h2>

    ${albums.length > 0
        ? albums.map(x => albumTemplate(x))
        : html`<p class="no-result">No result.</p>`
    }

    </div>
</section>`;

export const searchView = (ctx) => {
    const searchHandler = (e) => {
        e.preventDefault()
        const searchElement = document.querySelector('#search-input');
        api.search(searchElement.value)
            .then(albums => {
                ctx.render(searchTemplate(searchHandler, albums))
            })
    }

    ctx.render(searchTemplate(searchHandler, []))
}