import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const registerTemplate = (submitHandler) => html`
<section id="register">
    <div class="container">
        <form @submit=${submitHandler} id="register-form"  method="POST">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export const registerView = (ctx) => {

    const submitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget)
        const { username, password, ['repeatPass']: repass } = Object.fromEntries(formData);

        if (!(username, password, repass)) {
            alert("Don't leave empty fields!")
            return;
        }

        if (repass != password) {
            alert("Passwords don't match!")
            return;
        }

        api.register(username, password)
            .then(() => {
                ctx.page.redirect("/");
            })
            .catch(err => {
                alert(err)
            });
    };

    ctx.render(registerTemplate(submitHandler));
};