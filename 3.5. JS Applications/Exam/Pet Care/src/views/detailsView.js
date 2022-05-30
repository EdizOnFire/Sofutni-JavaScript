import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getItemById, deleteItem, sendDonation } from "../services/data.js"

let donations = 0
const detailsTemplate = (data, onDelete, onDonate) => html`
<section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${data.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${data.name}</h1>
                        <h3>Breed: ${data.breed}</h3>
                        <h4>Age: ${data.age} years</h4>
                        <h4>Weight: ${data.weight}kg</h4>
                        <h4 class="donation">Donation: ${donations}$</h4>
                    </div>
                 
                    <div class="actionBtn">

                    ${data._ownerId == localStorage.getItem("userId") 
                    ? html`
                    <a href="/edit/${data._id}" class="edit">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
                    : nothing}

                    ${localStorage.getItem("userId") &&
                    data._ownerId != localStorage.getItem("userId") 
                    ? html`
                    <a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
                    : nothing}

                    </div>
                </div>
            </div>
        </section>
    </main>`;


export async function detailsView(ctx) {
    const itemId = ctx.params.id
    const item = await getItemById(itemId)
    ctx.render(detailsTemplate(item, onDelete, onDonate))

    async function onDelete() {
        let confirmed = confirm("Are you sure you want to delete?");
        if (confirmed) {
            await deleteItem(itemId);
            ctx.page.redirect("/");
        }
    }

    async function onDonate() {
        document.querySelector('.donate').style.display = 'none'
        donations += 100
        await sendDonation(itemId)
    }
}