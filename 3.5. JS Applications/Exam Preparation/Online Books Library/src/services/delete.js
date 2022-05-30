import { getItemById, deleteItem } from "./data.js"

export const deleteView = async (ctx) => {
    try {
        const album = await getItemById(ctx.params.id)
        let confirmed = confirm(`Do you want to delete the ${album.title}?`)
        if (confirmed) {
            await deleteItem(ctx.params.id)
            ctx.page.redirect('/catalog')
        }
    } catch (err) {
        alert(err);
    }
}