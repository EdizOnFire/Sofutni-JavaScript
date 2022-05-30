import { html } from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../services/data.js"


const createTemplate = (submitHandler) => html`@submit=${submitHandler}`;

export const createView = (ctx) => {
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

        createItem(title, category, maxLevel, imageUrl, summary)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err)
            })
    };

    ctx.render(createTemplate(submitHandler));
};
