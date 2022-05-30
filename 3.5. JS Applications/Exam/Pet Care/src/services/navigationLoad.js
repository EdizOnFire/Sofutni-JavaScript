import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const userLinks = html`
<li><a href="/create">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>`;

const navigationTemplate = () => html`
<nav>
    <section class="logo">
        <img src="./images/logo.png" alt="logo">
    </section>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Dashboard</a></li>

        ${localStorage.getItem("authToken") ? userLinks : guestLinks}

    </ul>
</nav>`;

const headerElement = document.querySelector('header')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};