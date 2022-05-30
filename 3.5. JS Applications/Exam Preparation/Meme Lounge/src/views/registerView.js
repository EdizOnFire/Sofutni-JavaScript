import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const registerTemplate = (submitHandler) => html`
<section id="register">
    <form @submit=${submitHandler} method="POST" id="register-form">
        <div class="container">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <div class="gender">
                <input type="radio" name="gender" id="female" value="female">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="male" value="male" checked>
                <label for="male">Male</label>
            </div>
            <input type="submit" class="registerbtn button" value="Register">
            <div class="container signin">
                <p>Already have an account?<a href="/login">Sign in</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export const registerView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();

        const form = new FormData(e.target)
        const username = form.get("username")
        const email = form.get("email")
        const password = form.get("password")
        const rePass = form.get("repeatPass")



        if (!(username, email, password, rePass)) {
            alert("Don't leave empty fields!")
            return;
        }

        if (rePass != password) {
            alert("Passwords don't match!")
            return;
        }

        api.register(username, email, password)
            .then(() => {
                ctx.page.redirect("/");
            })
            .catch(err => {
                alert(err)
            });
    };

    ctx.render(registerTemplate(submitHandler));
};