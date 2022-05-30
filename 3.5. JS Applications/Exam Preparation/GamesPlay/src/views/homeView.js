import { html, render, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getMostRecent } from "../services/data.js";

const gameTemplate = (data) => html`
<div class="game">
    <div class="image-wrap">
        <img src=${data.imageUrl}>
    </div>
    <h3>${data.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/details/${data._id}" class="btn details-btn">Details</a>
    </div>
</div>`;

const homeTemplate = (items, user) => html`
<section id="welcome-world">

    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">

    <div id="home-page">
        <h1>Latest Games</h1>

        ${items.map((x) => gameTemplate(x))}
        ${items.length == 0 ? html`<p class="no-articles">No games yet</p>` : nothing}

    </div>
</section>`;

export const homeView = (ctx) => {
    getMostRecent().then((items) => {
        ctx.render(homeTemplate(items, ctx.user));
    });
}

const contentElement = document.querySelector('#main-content')
export const renderContent = (ctx, next) => {
    ctx.render = (templateResult) => {
        render(templateResult, contentElement);
    }

    next();
}