import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, editItem } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`
<section id="edit-page" class="edit">
            <form @submit=${submitHandler} id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value=${data.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${data.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value=${data.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value=${data.type}>
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
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
        const type = form.get("type")

        if (!title || !description || !imageUrl || !type) {
            alert('All fields should be filled!')
            return;
        }

        editItem(dataId, title, description, imageUrl, type)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getItemById(dataId)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler));
        })
}