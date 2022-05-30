import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, deleteItem } from "../services/data.js"

const detailsTemplate = (data, onDelete) => html`
<section id="meme-details">
            <h1>Meme Title: ${data.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src= ${data.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${data.description}
                    </p>

                    ${data._ownerId == localStorage.getItem("userId") 
        ? html`
        <a href="/edit/${data._id}" class="button warning">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button danger">Delete</a>`
        : nothing}
                    
                </div>
            </div>
        </section>

`;


export async function detailsView(ctx) {
    const itemId = ctx.params.id
    const item = await getItemById(itemId)
    ctx.render(detailsTemplate(item, onDelete))

    async function onDelete() {
        await deleteItem(itemId)
        ctx.page.redirect("/catalog")
    }
}