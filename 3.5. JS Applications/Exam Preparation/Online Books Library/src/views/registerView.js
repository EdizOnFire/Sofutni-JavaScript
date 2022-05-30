import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const registerTemplate = (submitHandler) => html`
<section id="register-page" class="register">
    <form @submit=${submitHandler} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget)
        const { email, password, ['confirm-pass']: repass } = Object.fromEntries(formData);

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