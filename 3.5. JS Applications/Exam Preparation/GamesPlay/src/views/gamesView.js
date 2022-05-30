import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getGames } from "../services/data.js";

const gameTemplate = (data) => html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${data.imageUrl}>
        <h6>${data.category}</h6>
        <h2>${data.title}</h2>
        <a href="/details/${data._id}" class="details-button">Details</a>
    </div>
</div>`;


const gamesTemplate = (items, user) => html`
<section id="catalog-page">
    <h1>All Games</h1>

    ${items.map((x) => gameTemplate(x, Boolean(user)))}
    ${items.length == 0 ? html`<h3 class="no-articles">No articles yet</h3>` : nothing}

</section>`;


export const gamesView = (ctx) => {
    getGames().then((items) => {
        ctx.render(gamesTemplate(items, ctx.user));
    });
};
