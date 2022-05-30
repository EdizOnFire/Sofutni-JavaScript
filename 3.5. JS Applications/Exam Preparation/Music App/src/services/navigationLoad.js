import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const userLinks = html`
<li><a href="/create">Create Album</a></li>
<li><a href="/logout">Logout</a></li>`;

const navigationTemplate = () => html`
<nav>
    <img src="./images/headphones.png" />
    <a href="/">Home</a>
    <ul>
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${localStorage.getItem("userId") ? userLinks : guestLinks}
    </ul>
</nav>`;

const headerElement = document.querySelector('.header-navigation')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};