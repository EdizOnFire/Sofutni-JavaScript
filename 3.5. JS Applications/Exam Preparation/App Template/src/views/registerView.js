import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const registerTemplate = (submitHandler) => html`@submit=${submitHandler}`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget)
        const { email, password, ['confirm-password']: repass } = Object.fromEntries(formData);

        if (!(email, password, repass)) {
            alert("Don't leave empty fields!")
            return;
        }

        if (repass != password) {
            alert("Passwords don't match!")
            return;
        }

        api.register(email, password)
            .then(() => {
                ctx.page.redirect("/");
            })
            .catch(err => {
                alert(err)
            });
    };

    ctx.render(registerTemplate(submitHandler));
};