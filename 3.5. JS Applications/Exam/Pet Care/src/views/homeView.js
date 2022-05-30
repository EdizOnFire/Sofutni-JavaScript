import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";

const homeTemplate = () => html`
<section class="welcome-content">
<article class="welcome-content-text">
    <h1>We Care</h1>
    <h1 class="bold-welcome">Your Pets</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
</article>
<article class="welcome-content-image">
    <img src="./images/header-dog.png" alt="dog">
</article>
</section>`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate());
}

export const renderContent = (ctx, next) => {
    const contentElement = document.querySelector('main')
    ctx.render = (templateResult) => {
        render(templateResult, contentElement);
    }

    next();
}