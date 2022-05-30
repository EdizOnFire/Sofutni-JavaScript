import * as api from './api.js';

const host = 'http://localhost:3030';

export async function getItems() {
    const result = await api.get(host + "/data/pets?sortBy=_createdOn%20desc&distinct=name")
    return result
}

export async function getItemById(itemId) {
    const result = await api.get(host + `/data/pets/${itemId}`)
    return result
}

export async function createItem(name, breed, age, weight, image) {
    const result = await api.post(host + "/data/pets", { name, breed, age, weight, image })
    return result
}

export async function editItem(itemId, name, breed, age, weight, image) {
    const result = await api.put(host + `/data/pets/${itemId}`, { name, breed, age, weight, image })
    return result
}

export async function deleteItem(itemId) {
    const result = await api.del(host + `/data/pets/${itemId}`)
    return result
}

export async function sendDonation(itemId) {
    const result = await api.post(host + "/data/donation", { itemId })
    return result
}