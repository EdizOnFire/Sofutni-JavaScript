import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items) => html`

<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <ul class="my-books-list">

        ${items.map((x) => itemTemplate(x))}
        ${items.length == 0 ? html`<p class="no-books">No books in database!</p>` : nothing}

    </ul>
</section>`;


export const catalogView = (ctx) => {
    getMyItems(localStorage.getItem('userId')).then((items) => {
        ctx.render(catalogTemplate(items));
    });
};
