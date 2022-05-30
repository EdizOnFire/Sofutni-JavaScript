import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
<div id="guest">
    <a href="/login">Login</a>
    <a href="/register">Register</a>
</div>`;

const userLinks = html`
<div id="user">
    <a href="/create">Create Game</a>
    <a href="/logout">Logout</a>
</div>`;

const navigationTemplate = () => html`
<h1><a class="home" href="/">GamesPlay</a></h1>
<nav>
    <a href="/games">All games</a>
    ${localStorage.getItem("authToken") ? userLinks : guestLinks}
</nav>
</header>`;

const headerElement = document.querySelector('.header-navigation')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};