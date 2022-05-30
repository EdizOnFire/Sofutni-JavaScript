import { html, nothing } from "../../node_modules/lit-html/lit-html.js";


const templateDetails = (data) => html`
<div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg">
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" class="details-button">Details</a>
                </div>
            </div>`;

export const template = (data) => html`
${localStorage.getItem("user") ? templateDetails(data._id) : nothing}`;
