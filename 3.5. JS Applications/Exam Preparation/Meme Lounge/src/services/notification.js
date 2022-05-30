import { html } from "../../node_modules/lit-html/lit-html.js";

export const notification = (message) => html`
<section id="notifications">
    <div id="errorBox" class="notification">
        <span>${message}</span>
    </div>
</section>`