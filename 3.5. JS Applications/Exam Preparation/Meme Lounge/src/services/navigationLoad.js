import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`
<div class="guest">
    <div class="profile">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
    <a class="active" href="/">Home Page</a>
</div>`;

const userLinks = html`
<div class="user">
    <a href="/create">Create Meme</a>
    <div class="profile">
        <span>Welcome, ${localStorage.getItem('email')}</span>
        <a href="/userCatalog">My Profile</a>
        <a href="/logout">Logout</a>
    </div>
</div>`;

const navigationTemplate = () => html`
<nav>
    <a href="/catalog">All Memes</a>

    ${localStorage.getItem("authToken") ? userLinks : guestLinks}

</nav>`;

const headerElement = document.querySelector('header')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};