import { editPageTemplate } from "./editPageTemplate.js";
import furnitureService from "./../../services/furnitureService.js";

let form = undefined;
async function submitHandler(context, id, e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    form.invalidFields = {};

    let make = formData.get("make");
    let model = formData.get("model");
    let year = Number(formData.get("year"));
    let description = formData.get("description");
    let price = Number(formData.get("price"));
    let img = formData.get("img");
    let material = formData.get("material");

    if (make.length < 4) {
        form.invalidFields.make = true;
    }
    if (model.length < 4) {
        form.invalidFields.model = true;
    }
    if (!(year >= 1950 && year <= 2050)) {
        form.invalidFields.year = true;
    }
    if (description.length <= 10) {
        form.invalidFields.description = true;
    }
    if (!(price > 0)) {
        form.invalidFields.price = true;
    }
    if (img === "") {
        form.invalidFields.img = true;
    }

    if(Object.keys(form.invalidFields).length > 0) {
        let templateResult = editPageTemplate(form);
        return context.renderView(templateResult);
    }
    let editedFurniture = {
        make,
        model,
        year,
        description,
        price,
        img,
        material
    }
    let result = await furnitureService.update(editedFurniture, id);
    context.page.redirect('/dashboard');
}

async function getView(context) {
    let id = context.params.id;
    let furnitureDetails = await furnitureService.get(id);
    console.log(furnitureDetails)
    //partial application to access the context and avoid nesting submitHandler
    let boundSubmitHandler = submitHandler.bind(null, context, id);
    form = {
        submitHandler: boundSubmitHandler,
        values: {
            make: furnitureDetails.make,
            model: furnitureDetails.model,
            year: furnitureDetails.year,
            description: furnitureDetails.description,
            price: furnitureDetails.price,
            img: furnitureDetails.img,
            material: furnitureDetails.material
        },
        invalidFields: {
        }
    }

    let templateResult = editPageTemplate(form);
    context.renderView(templateResult);
}

export default {
    getView
}