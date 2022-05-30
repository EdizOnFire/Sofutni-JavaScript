import { html } from "../../node_modules/lit-html/lit-html.js";
import { getGameById, editGame } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`
<section id="edit-page" class="auth">
    <form id="edit" @submit=${submitHandler}>
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${data.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${data.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${data.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${data.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary">${data.summary}</textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export const editView = (ctx) => {
    const dataId = ctx.params.id
    const submitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)

        const title = form.get("title")
        const category = form.get("category")
        let maxLevel = form.get("maxLevel")
        const imageUrl = form.get("imageUrl")
        const summary = form.get("summary")

        if (!title || !category || !maxLevel || !imageUrl || !summary) {
            throw new Error("All fields are required!")
        }

        editGame(dataId, title, category, maxLevel, imageUrl, summary)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getGameById(dataId)
        .then(game => {
            ctx.render(editTemplate(game, submitHandler));
        })
}