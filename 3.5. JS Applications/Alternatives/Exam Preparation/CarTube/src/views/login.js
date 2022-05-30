import { html } from "../helper.js";
import { login } from "../api/data.js";


const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="container">
        <form @submit=${onSubmit} id="login-form">
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
</section>`


export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault();

        const form = new FormData(ev.target);

        const username = form.get('username');
        const password = form.get('password');

        try {
            if (!username || !password) {
                throw new Error("All fields are required!")
            }
            await login(username, password)
            ctx.page.redirect("/listings")
            ctx.setUserNav()

        } catch (err) {
            alert(err.message)
        }
    }
}