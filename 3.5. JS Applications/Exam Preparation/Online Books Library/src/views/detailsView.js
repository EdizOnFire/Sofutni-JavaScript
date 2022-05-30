import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItemById } from "../services/data.js";

const user = localStorage.getItem("userId");
const detailsTemplate = (data) => html`<section id="details-page" class="details">
    <div class="book-information">
        <h3>${data.title}</h3>
        <p class="type">Type: ${data.type}</p>
        <p class="img"><img src=>${data.imageUrl}</p>
        <div class="actions">
            ${user == data._ownerId
            ? html`<div class="buttons"></div>
            <a href="/edit/${data._id}" class="button">Edit</a>
            <a href="/delete/${data._id}" class="button">Delete</a>
        </div>`
        : nothing}

        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        <!-- <a class="button" href="#">Like</a> -->

        <!-- ( for Guests and Users )  -->
        <!-- <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div> -->
    </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${data.description}</p>
    </div>
</section>`;

export const detailsView = (ctx) => {
    getItemById(ctx.params.id).then((data) => {
        ctx.render(detailsTemplate(data));
    });
};
