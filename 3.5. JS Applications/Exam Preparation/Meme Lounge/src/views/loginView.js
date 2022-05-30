import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const loginTemplate = (submitHandler) => html`
<section id="login">
    <form @submit=${submitHandler} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export const loginView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        api.login(email, password)
            .then(() => {
                ctx.page.redirect("/catalog");
            })
            .catch(err => {
                alert(err)
            });
    };

    ctx.render(loginTemplate(submitHandler));
};
