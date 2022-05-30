import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const loginTemplate = (submitHandler) => html`@submit=${submitHandler}`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        api.login(email, password)
            .then(() => {
                ctx.page.redirect("/");
            })
            .catch(err => {
                alert(err)
            });
    };

    ctx.render(loginTemplate(submitHandler));
};
