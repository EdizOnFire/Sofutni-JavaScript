import * as api from "./api.js";

export const logout = async (ctx) => {
    await api.logout()
    ctx.page.redirect('/');
}