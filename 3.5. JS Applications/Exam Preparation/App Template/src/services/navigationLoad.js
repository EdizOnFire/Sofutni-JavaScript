import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html``;

const userLinks = html``;

const navigationTemplate = () => html`
${localStorage.getItem("authToken") ? userLinks : guestLinks}`;

const headerElement = document.querySelector('.header-navigation')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};

//add module and header to HTML if it's not there