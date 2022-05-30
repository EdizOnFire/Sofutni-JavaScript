import { allMyFurnitureTemplate } from "./myFurnitureTemplate.js";
import authService from "./../../services/authService.js";
import furnitureService from "./../../services/furnitureService.js";

async function getView(context) {
    let id = authService.getUserId();
    let myFurniture = await furnitureService.getMyFurniture(id);
    let templateResult = allMyFurnitureTemplate(myFurniture);
    context.renderView(templateResult);
}

export default {
    getView
}