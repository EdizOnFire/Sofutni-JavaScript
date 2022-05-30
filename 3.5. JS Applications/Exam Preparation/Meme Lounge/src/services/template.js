import { html } from "../../node_modules/lit-html/lit-html.js";


export const itemTemplate = (data) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${data.title}</p>
            <img class="meme-image" alt="meme-img" src=${data.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${data._id}">Details</a>
        </div>
    </div>
</div>`;