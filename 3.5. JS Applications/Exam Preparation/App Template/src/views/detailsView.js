import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, deleteItem } from "../services/data.js"

const detailsTemplate = (data) => html`

${data._ownerId == localStorage.getItem("userId") 
        ? html`
        <a href="/edit/${data._id}" class="button-list">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>`
        : nothing}`;


export async function detailsView(ctx) {
    const itemId = ctx.params.id
    const item = await getItemById(itemId)
    ctx.render(detailsTemplate(item, onDelete))

    async function onDelete() {
        await deleteItem(itemId)
        ctx.page.redirect("/catalog")
    }
}