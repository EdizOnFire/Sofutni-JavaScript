import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">

        ${items.map((i) => itemTemplate(i))}
        ${items.length == 0 
            ? html`<div>
            <p class="no-pets">No pets in dashboard</p>
        </div>`
        : nothing}

    </div>
</section>`;


export const catalogView = (ctx) => {
    getItems().then((items) => {
        ctx.render(catalogTemplate(items));
    });
};
