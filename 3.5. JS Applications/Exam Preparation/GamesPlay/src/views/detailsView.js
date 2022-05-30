import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
    getGameById,
    deleteGame,
    getComments,
    createComment,
} from "../services/data.js";

const detailsTemplate = (game, onDelete, onComment, comments) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            <ul>
                ${comments.length > 0
            ? comments.map(commentTemplate)
            : html`<p class="no-comment">No comments.</p>`}
            </ul>
        </div>

        ${game._ownerId == localStorage.getItem("userId")
        ? html` <div class="buttons">
            <a href="/edit/${game._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
        </div>`
        : null}
    </div>

    ${localStorage.getItem("userId") &&
        localStorage.getItem("userId") != game._ownerId
      ? html` <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onComment} class="form">
            <textarea id="commentInput" name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
        </form>
    </article>`
      : null}
</section>`;

const commentTemplate = (comment) => html`<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export async function detailsView(ctx) {
    const gameId = ctx.params.id;

    const game = await getGameById(gameId);
    let comments = await getComments(gameId);

    ctx.render(detailsTemplate(game, onDelete, onComment, comments));

    async function onDelete() {
        confirm("Are you sure");
        if (confirm) {
            await deleteGame(gameId);
            ctx.page.redirect("/");
        }
    }

    async function onComment(e) {
        e.preventDefault();

        let comment = document.getElementById("commentInput").value;
        await createComment(gameId, comment);

        let comments = await getComments(gameId);
        ctx.render(detailsTemplate(game, onDelete, onComment, comments));
    }
}
