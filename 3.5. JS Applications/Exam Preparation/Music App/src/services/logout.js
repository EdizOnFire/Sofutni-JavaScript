import * as api from "./api.js";

export const logout = (ctx) => {
    api.logout()
    .then(() => {
        ctx.page.redirect('/');
    })
}