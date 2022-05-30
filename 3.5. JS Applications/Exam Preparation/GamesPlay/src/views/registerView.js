import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="content auth">
<form id="register" @submit=${submitHandler} method="POST">
    <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com">

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password">

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password">

        <input class="btn submit" type="submit" value="Register">

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </div>
</form>`;

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