import * as api from './api.js';

const host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getItems() {
    const games = await api.get(host + "/data/books?sortBy=_createdOn%20desc")
    return games
}

export async function getMyItems(userId) {
    const games = await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return games
}



export async function getItemById(itemId) {
    const game = await api.get(host + `/data/books/${itemId}`)
    return game
}

export async function createItem(title, description, imageUrl, type) {
    const result = await api.post(host + "/data/books", { title, description, imageUrl, type })
    return result
}

export async function editItem(itemId, title, description, imageUrl, type) {
    const result = await api.put(host + `/data/books/${itemId}`, { title, description, imageUrl, type })
    return result
}

export async function deleteItem(itemId) {
    const result = await api.del(host + `/data/books/${itemId}`)
    return result
}

export async function searchItems(searchText) {
    const result = await api.get(`${host}/data/cars?where=year%3D${searchText}`)
    return result;
}