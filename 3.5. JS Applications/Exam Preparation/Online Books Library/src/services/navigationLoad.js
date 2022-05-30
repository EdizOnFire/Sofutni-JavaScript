import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="/register">Register</a>
</div>`;

const userLinks = html`
<div id="user">
    <span>Welcome, ${localStorage.getItem('email')}</span>
    <a class="button" href="/catalog">My Books</a>
    <a class="button" href="/create">Add Book</a>
    <a class="button" href="/logout">Logout</a>
</div>`;

const navigationTemplate = () => html`
<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/">Dashboard</a>

        ${localStorage.getItem("authToken") ? userLinks : guestLinks}

    </section>
</nav>
</header>;`

const headerElement = document.querySelector('.site-header')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};