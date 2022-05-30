import { html } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, editItem } from "../services/data.js"

const editTemplate = (data, submitHandler) => html`
<section id="editPage">
    <form @submit=${submitHandler} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value=${data.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value=${data.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value=${data.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value=${data.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value=${data.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;

export const editView = (ctx) => {
    const dataId = ctx.params.id
    const submitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get("name")
        const breed = form.get("breed")
        const age = form.get("age")
        const weight = form.get("weight")
        const image = form.get("image")

        if (!name || !breed || !age || !weight || !image) {
            alert('All fields should be filled!')
            return;
        }

        editItem(dataId, name, breed, age, weight, image)
            .then(() => {
                ctx.page.redirect(`/details/${dataId}`)
            })
    }

    getItemById(dataId)
        .then(item => {
            ctx.render(editTemplate(item, submitHandler));
        })
}