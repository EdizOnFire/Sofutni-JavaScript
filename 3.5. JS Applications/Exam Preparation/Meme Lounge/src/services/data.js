import * as api from './api.js';

const host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getItems() {
    const result = await api.get(host + "/data/memes?sortBy=_createdOn%20desc")
    return result
}

export async function getUserItems(userId) {
    const result = await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return result
}

export async function getItemById(itemId) {
    const result = await api.get(host + `/data/memes/${itemId}`)
    return result
}

export async function createItem(title, description, imageUrl) {
    const result = await api.post(host + "/data/memes", { title, description, imageUrl })
    return result
}

export async function editItem(itemId, title, description, imageUrl) {
    const result = await api.put(host + `/data/memes/${itemId}`, { title, description, imageUrl })
    return result
}

export async function deleteItem(itemId) {
    const result = await api.del(host + `/data/memes/${itemId}`)
    return result
}