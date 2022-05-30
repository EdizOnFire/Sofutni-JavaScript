import * as api from './api.js';

const host = 'http://localhost:3030';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getItems() {
    const games = await api.get(host + "/data/cars?sortBy=_createdOn%20desc")
    return games
}

export async function getMyItems(userId) {
    const games = await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
    return games
}

export async function getItemById(itemId) {
    const game = await api.get(host + `/data/cars/${itemId}`)
    return game
}

export async function createItem(brand, model, description, year, imageUrl, price) {
    const result = await api.post(host + "/data/cars", { brand, model, description, year, imageUrl, price })
    return result
}

export async function editItem(itemId, brand, model, description, year, imageUrl, price) {
    const result = await api.put(host + `/data/cars/${itemId}`, { brand, model, description, year, imageUrl, price })
    return result
}

export async function deleteItem(itemId) {
    const result = await api.del(host + `/data/cars/${itemId}`)
    return result
}

export async function search(searchText) {
    const result = await api.get(`${host}/data/cars?where=year%3D${searchText}`)
    return result;
}