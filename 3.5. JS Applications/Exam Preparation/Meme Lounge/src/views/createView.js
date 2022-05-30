import { html } from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../services/data.js"


const createTemplate = (submitHandler) => html`
<section id="create-meme">
    <form @submit=${submitHandler} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export const createView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const title = form.get("title")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")

        if (!title || !description || !imageUrl) {
            alert('All fields should be filled!')
            return;
        }

        createItem(title, description, imageUrl)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err)
            })
    };

    ctx.render(createTemplate(submitHandler));
};
