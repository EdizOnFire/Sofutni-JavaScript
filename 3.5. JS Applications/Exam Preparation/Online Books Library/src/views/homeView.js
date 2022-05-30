import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const homeTemplate = (items) => html`

<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <ul class="other-books-list">

        ${items.map((x) => itemTemplate(x))}
        ${items.length == 0 ? html`<p class="no-books">No books in database!</p>` : nothing}

    </ul>

</section>`;



export const homeView = (ctx) => {
    console.log(getItems());
    getItems().then((items) => {
        ctx.render(homeTemplate(items));
    });
}


export const renderContent = (ctx, next) => {
    const contentElement = document.querySelector('#site-content')
    ctx.render = (templateResult) => {
        render(templateResult, contentElement);
    }

    next();
}