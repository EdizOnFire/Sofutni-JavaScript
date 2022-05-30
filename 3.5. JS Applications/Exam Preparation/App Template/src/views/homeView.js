import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";

const itemTemplate = (data) => html``;

const homeTemplate = (items) => html`${items.map((i) => itemTemplate(i))}
${items.length == 0 ? html`<p>No items yet</p>` : nothing}`;

export const homeView = (ctx) => {
    getItems().then((items) => {
        ctx.render(homeTemplate(items, ctx.user));
    });
}

export const renderContent = (ctx, next) => {
    // const contentElement = document.querySelector('#main-content')
    ctx.render = (templateResult) => {
        render(templateResult, contentElement);
    }

    next();
}