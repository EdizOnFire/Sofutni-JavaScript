import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js"

const editTemplate = (album, submitHandler) => html`
<section class="editPage">
    <form @submit=${submitHandler}>
        <fieldset>
            <legend>Edit Album</legend>
            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" value=${album.name} class="name" type="text">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" value=${album.imgUrl} class="imgUrl" type="text">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" value=${album.price} class="price" type="text">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" value=${album.releaseDate} class="releaseDate" type="text">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" value=${album.artist} class="artist" type="text">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" value=${album.genre} class="genre" type="text">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10" cols="10">${album.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export const editView = (ctx) => {
    const albumId = ctx.params.albumId
    const submitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get("name")
        const imgUrl = form.get("imgUrl")
        let price = form.get("price")
        const releaseDate = form.get("releaseDate")
        const artist = form.get("artist")
        const genre = form.get("genre")
        const description = form.get("description")

        if (!name || !imgUrl || !price || !releaseDate || !artist || !genre || !description) {
            alert("All fields are required!")
            return;
        }

        api.edit(albumId, name, imgUrl, price, releaseDate, artist, genre, description)
            .then(() => {
                ctx.page.redirect(`/albums/${albumId}`)
            })
    }

    api.getOne(albumId)
        .then(album => {
            ctx.render(editTemplate(album, submitHandler));
        })
}