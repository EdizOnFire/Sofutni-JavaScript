import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, editItem } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`@submit=${submitHandler}`;

export const editView = (ctx) => {
    const dataId = ctx.params.albumId
    const submitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const title = form.get("title")
        const category = form.get("category")
        const maxLevel = form.get("maxLevel")
        const imageUrl = form.get("imageUrl")
        const summary = form.get("summary")
        if (!title || !category || !maxLevel || !imageUrl || !summary) {
            alert('All fields should be filled!')
            return;
        }

        editItem(dataId, title, category, maxLevel, imageUrl, summary)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getItemById(dataId)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler));
        })
}