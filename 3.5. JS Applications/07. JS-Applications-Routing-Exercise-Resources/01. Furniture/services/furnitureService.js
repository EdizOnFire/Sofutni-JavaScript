import authService from "./authService.js";

let baseUrl = "http://localhost:3030/data/catalog";

async function getAll() {
  let response = await fetch(baseUrl);
  let result = await response.json();
  return result;
}

async function get(id) {
  let url = `${baseUrl}/${id}`;
  // console.log(url);
  let response = await fetch(`${baseUrl}/${id}`);
  let result = await response.json();
  return result;
}

async function create(item) {
  let response = await fetch(`${baseUrl}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": authService.getAuthToken(),
    },
    method: "Post",
    body: JSON.stringify(item),
  });

  let result = await response.json();
  return result;
}

async function update(item, id) {
  let response = await fetch(`${baseUrl}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": authService.getAuthToken(),
    },
    method: "Put",
    body: JSON.stringify(item),
  });

  let result = await response.json();
  return result;
}

async function deleteItem(id) {
  console.log(`${baseUrl}/${id}`);
  try {
    let response = await fetch(`${baseUrl}/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": authService.getAuthToken(),
      },
      method: "Delete",
    });
    return response;
  } catch(err) {
    console.log(err);
  } 
}

async function getMyFurniture(id) {
  let url = `${baseUrl}/?where=_ownerId%3D%22${id}%22`;
  let response = await fetch(url);
  let result = await response.json();
  return result;
}

export default {
  getAll,
  get,
  create,
  update,
  deleteItem,
  getMyFurniture
};
