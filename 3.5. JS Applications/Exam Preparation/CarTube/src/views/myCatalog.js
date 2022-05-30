import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getMyItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items, user) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
        <div class="listings">
            ${items.map((x) => itemTemplate(x, Boolean(user)))}
            ${items.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` : nothing}
        </div>
</section>`;


export const myCatalogView = (ctx) => {
    const userId = localStorage.getItem('userId');
    getMyItems(userId).then((items) => {
        ctx.render(catalogTemplate(items, ctx.user));
    });
};