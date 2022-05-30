import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getUserItems } from "../services/data.js";
import { itemTemplate } from "../services/template.js";

const catalogTemplate = (items, user) => html`

<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: Merry</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${items.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

        ${items.map((x) => itemTemplate(x))}
        ${items.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : nothing}


    </div>
</section>`;

export const userView = (ctx) => {
    const user = { userId: localStorage.getItem('userId'), email: localStorage.getItem('email') }
    getUserItems(user.userId).then((items) => {
        ctx.render(catalogTemplate(items, user));
    });
};
