import { html } from "../../node_modules/lit-html/lit-html.js";
import { createGame } from "../services/data.js"
import { dataIsValid } from "../services/validators.js";


const createTemplate = (submitHandler) => html`
<section id="create-page" class="auth">
    <form id="create" @submit=${submitHandler}>
        <div class="container">

            <h1>Create Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" placeholder="Enter game title...">

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" placeholder="Enter game category...">

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary"></textarea>
            <input class="btn submit" type="submit" value="Create Game">
        </div>
    </form>`;

export const createView = (ctx) => {
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

        createGame(title, category, maxLevel, imageUrl, summary)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err)
            })
    };

    ctx.render(createTemplate(submitHandler));
};
