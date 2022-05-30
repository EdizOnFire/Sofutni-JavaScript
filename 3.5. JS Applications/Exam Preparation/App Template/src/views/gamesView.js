import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";

const itemTemplate = (data) => html``;


const catalogTemplate = (items, user) => html`${items.map((x) => itemTemplate(x, Boolean(user)))}
    ${items.length == 0 ? html`<h3>No articles yet</h3>` : nothing}`;


export const catalogView = (ctx) => {
    getItems().then((items) => {
        ctx.render(catalogTemplate(items, ctx.user));
    });
};
