import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, editItem } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${submitHandler} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" value=${data.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" value=${data.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" value=${data.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" value=${data.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${data.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" value=${data.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export const editView = (ctx) => {
    const dataId = ctx.params.id
    const submitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const brand = form.get("brand")
        const model = form.get("model")
        const description = form.get("description")
        const imageUrl = form.get("imageUrl")
        let year = form.get("year")
        let price = form.get("price")
        year = Number(year);
        price = Number(price);

        if (!brand || !model || !description || !year || !imageUrl || !price) {
            alert('All fields should be filled!')
            return;
        }

        editItem(dataId, brand, model, description, year, imageUrl, price)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getItemById(dataId)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler));
        })
}