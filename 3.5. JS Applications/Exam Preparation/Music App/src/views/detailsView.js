import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js"

const detailsTemplate = (album, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="album">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: ${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            ${album._ownerId == localStorage.getItem("userId") 
                ? html` 
                <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete} class="remove">Delete</a>
                </div>`
                : nothing
          }
        </div>
    </div>
</section>`

export async function detailsView(ctx) {
    const albumId = ctx.params.albumId
    const album = await api.getOne(albumId)
    ctx.render(detailsTemplate(album, onDelete))

    async function onDelete() {
        let confirmed = confirm(`Are you sure you want to delete ${album.name}?`)
        if (confirmed) {
        await api.remove(albumId)
        ctx.page.redirect("/catalog")
        }
    }
}
