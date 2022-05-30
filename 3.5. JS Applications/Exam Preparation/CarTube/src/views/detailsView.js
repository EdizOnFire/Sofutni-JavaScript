import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, deleteItem } from "../services/data.js"

const detailsTemplate = (data, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${data.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>

        ${data._ownerId == localStorage.getItem("userId") 
        ? html`
        <div class="listings-buttons"></div>
        <a href="/edit/${data._id}" class="button-list">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>`
        : nothing}
    </div>
</section>`;


export async function detailsView(ctx) {
    const carId = ctx.params.id
    const car = await getItemById(carId)
    ctx.render(detailsTemplate(car, onDelete))

    async function onDelete() {
        await deleteItem(carId)
        ctx.page.redirect("/catalog")
    }
}