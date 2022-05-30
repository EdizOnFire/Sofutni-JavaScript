import { html } from "../../node_modules/lit-html/lit-html.js";
import * as api from "../services/api.js";

const loginTemplate = (submitHandler) => html`
<section id="login">
        <form @submit=${submitHandler} id="login-form">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export const loginView = (ctx) => {
    ctx.render(loginTemplate(submitHandler));
    async function submitHandler(e) {
        e.preventDefault();
        const { username, password } = Object.fromEntries(new FormData(e.currentTarget));
        api.login(username, password)
            .then(() => {
                ctx.page.redirect("/");
            })
            .catch(err => {
                alert(err)
            });
    };
};
