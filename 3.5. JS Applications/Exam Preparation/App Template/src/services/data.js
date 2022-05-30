import * as api from './api.js';

const host = 'http://localhost:3030';

export async function getItems() {
    const result = await api.get(host + "/data/cars?sortBy=_createdOn%20desc")
    return result
}

export async function getItemById(itemId) {
    const result = await api.get(host + `/data/cars/${itemId}`)
    return result
}

export async function createItem(brand, model, description, imageUrl, year, price) {
    const result = await api.post(host + "/data/cars", { brand, model, description, imageUrl, year, price })
    return result
}

export async function editItem(itemId, brand, model, description, imageUrl, year, price) {
    const result = await api.put(host + `/data/cars/${itemId}`, { brand, model, description, imageUrl, year, price })
    return result
}

export async function deleteItem(itemId) {
    const result = await api.del(host + `/data/cars/${itemId}`)
    return result
}

export async function searchItems(searchText) {
    const result = await api.get(`${host}/data/cars?where=year%3D${searchText}`)
    return result;
}