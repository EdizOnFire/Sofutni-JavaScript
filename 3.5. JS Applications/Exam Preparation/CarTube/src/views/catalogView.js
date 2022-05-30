import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items, user) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${items.map((x) => itemTemplate(x, Boolean(user)))}
        ${items.length == 0 ? html`<p class="no-cars">No cars in database.</p>` : nothing}
    </div>
</section>`;


export const catalogView = (ctx) => {
    getItems().then((items) => {
        ctx.render(catalogTemplate(items, ctx.user));
    });
};