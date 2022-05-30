import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items) => html`${items.map((i) => itemTemplate(i))}
    ${items.length == 0 ? html`<p>No items in Catalog!</p>` : nothing}`;


export const catalogView = (ctx) => {
    getItems().then((items) => {
        ctx.render(catalogTemplate(items, ctx.user));
    });
};
