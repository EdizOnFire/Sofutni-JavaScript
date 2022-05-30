import { html } from "./../../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (furnitureDetails, isOwner, deleteFurniture) => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Furniture Details</h1>
</div>
</div>
<div class="row space-top">
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${furnitureDetails.img} />
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${furnitureDetails.make}</span></p>
    <p>Model: <span>${furnitureDetails.model}</span></p>
    <p>Year: <span>${furnitureDetails.year}</span></p>
    <p>Description: <span>${furnitureDetails.description}</span></p>
    <p>Price: <span>${furnitureDetails.price}</span></p>
    <p>Material: <span>${furnitureDetails.material}</span></p>
    ${isOwner 
    ? html `
    <div>
        <a href="/edit/${furnitureDetails._id}" class="btn btn-info">Edit</a>
        <a href="javascript:void(0);" type="button" class="btn btn-red" @click=${deleteFurniture}>Delete</a>
    </div>`
    : ""}  
</div>
</div>`;