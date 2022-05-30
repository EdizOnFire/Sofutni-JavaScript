import { detailsTemplate } from "./detailsTemplate.js";
import furnitureService from "./../../services/furnitureService.js";
import authService from "./../../services/authService.js";

async function getView(context) {
    let id = context.params.id;
    let detailsFurniture = await furnitureService.get(id);
    let boundDeleteHandler = deleteFurniture.bind(null, context, id);
    detailsFurniture = changeUrlImage(detailsFurniture);
    let isOwner = authService.getUserId() === detailsFurniture._ownerId;
    let templateResult = detailsTemplate(detailsFurniture, isOwner, boundDeleteHandler);
    context.renderView(templateResult);
}
function changeUrlImage(detailsFurniture) {
    detailsFurniture.img = `./.${detailsFurniture.img}`;
    return detailsFurniture;
}
async function deleteFurniture(context, id) {
    let confirmed = confirm("Are you sure you want to delete the item?")
    if (confirmed) {
        await furnitureService.deleteItem(id);
        context.page.redirect('/dashboard');
    }
}

export default {
    getView
}