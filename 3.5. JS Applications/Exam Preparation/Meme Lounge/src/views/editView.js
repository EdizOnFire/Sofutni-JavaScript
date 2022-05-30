import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, editItem } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`
<section id="edit-meme">
    <form @submit=${submitHandler} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${data.description}>
                           
                        </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export const editView = (ctx) => {
    const dataId = ctx.params.id
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

        editItem(dataId, title, description, imageUrl)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getItemById(dataId)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler));
        })
}