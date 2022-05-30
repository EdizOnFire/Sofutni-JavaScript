import { html } from "../../node_modules/lit-html/lit-html.js";
import { createItem } from "../services/data.js"


const createTemplate = (submitHandler) => html`
<section id="createPage">
    <form @submit=${submitHandler} class="createForm">
        <img src="./images/cat-create.jpg">
        <div>
            <h2>Create PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" placeholder="Max">
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" placeholder="Shiba Inu">
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" placeholder="2 years">
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" placeholder="5kg">
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" placeholder="./image/dog.jpeg">
            </div>
            <button class="btn" type="submit">Create Pet</button>
        </div>
    </form>
</section>`;

export const createView = (ctx) => {
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

        createItem(name, breed, age, weight, image)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err)
            })
    };

    ctx.render(createTemplate(submitHandler));
};
