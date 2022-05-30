import { getUserFur } from "../api/data.js"
import { html, until } from "../helper.js"
import { loadTemp } from "./loading.js"

const myFurTemp = (itemsPromise) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${until(itemsPromise, loadTemp())}
</div>`

const furTemp = (item) => html`
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${item.img} />
            <p>${item.description}</p>
            <footer>
                <p>Price: <span>${item.price} $</span></p>
            </footer>
            <div>
                <a href="/details/${item._id}" class="btn btn-info">Details</a>
            </div>
        </div>
    </div>
</div>`

export async function myFurPage(ctx) {
    ctx.render(myFurTemp(loadItems()))
}

async function loadItems() {
    let items = await getUserFur()

    return items.map(furTemp)
}

