import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items, user) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${items.map((x) => itemTemplate(x))}
        ${items.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : nothing}
        
    </div>
</section>`;


export const catalogView = (ctx) => {
    getItems().then((items) => {
        ctx.render(catalogTemplate(items, ctx.user));
    });
};
