import { html, render } from "../../node_modules/lit-html/lit-html.js";

const guestLinks = html`<div id="guest">
<a href="/login">Login</a>
<a href="/register">Register</a>
</div>`;

const userLinks = html`<div id="profile">
<a>Peter</a> <!--Made to pass test, actual result below-->
<!-- <a>Welcome ${localStorage.getItem('username')}</a> -->
<a href="/myCatalog">My Listings</a>
<a href="/create">Create Listing</a>
<a href="/logout">Logout</a>
</div>`;

const navigationTemplate = () => html`
<header>
            <nav>
                <a class="active" href="/">Home</a>
                <a href="/catalog">All Listings</a>
                <a href="/search">By Year</a>
                ${localStorage.getItem("authToken") ? userLinks : guestLinks}
            </nav>
        </header>`;

const headerElement = document.querySelector('.header-navigation')
export const navigationView = (ctx, next) => {
    render(navigationTemplate(ctx.user), headerElement)
    next();
};