import { postComment } from "./comment.js";
import { hideContent } from "./app.js";

export const url = "http://localhost:3030/jsonstore/collections/myboard/";
export const containerElement = document.querySelector(".container");
export const mainElement = document.querySelector("main");
const titleInputElement = document.querySelector("#topicName");
const usernameInputElement = document.querySelector("#username");
const postInputElement = document.querySelector("#postText");
const postBtnElement = document.querySelector(".public");
const cancelBtnElement = document.querySelector(".cancel");
postBtnElement.setAttribute("type", "button");
cancelBtnElement.setAttribute("type", "button");

export function eventListeners() {
    postBtnElement.addEventListener("click", onSubmit);
    cancelBtnElement.addEventListener("click", onCancel);
}

async function onSubmit() {
    const response = await fetch(url + "posts", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            title: titleInputElement.value,
            username: usernameInputElement.value,
            post: postInputElement.value,
        }),
    });

    const data = await response.json();

    createDiv(data);
}

function onCancel() {
    titleInputElement.value = "";
    usernameInputElement.value = "";
    postInputElement.value = "";
}

function createDiv(data) {
    const div = document.createElement("div");
    div.setAttribute("id", data._id);
    div.innerHTML = `
    <h1>${data.title}</h1>
    <p>Date: <b>10.03.2022 16:23</b></p>
    <p>Username: <b>${data.username}</b></p>`;
    div.style.border = "1px solid black";
    div.style.cursor = "pointer";
    div.addEventListener("click", function (data) {
        hideContent()
        div.style.display = "none";
        const commentSection = document.createElement("div");
        commentSection.classList.add("theme-title");
        commentSection.innerHTML = `
                <div class="theme-content">
                    <div class="theme-title">
                        <div class="theme-name-wrapper">
                            <div class="theme-name">
                                <h2>Title</h2>
                            </div>
                        </div>
                    </div>
                    <div class="answer-comment">
                        <p><span>currentUser</span> comment:</p>
                        <div class="answer">
                            <form>
                                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                                <div>
                                    <label for="username">Username <span class="red">*</span></label>
                                    <input type="text" name="username" id="username">
                                </div>
                                <button type='button'>Post</button>
                            </form>
                        </div>
                    </div>
                </div>`;
        const commentPostBtnElement = document.querySelectorAll("form button")[1];
        commentPostBtnElement.addEventListener("click", postComment(data));
        containerElement.appendChild(commentSection);
    });

    containerElement.appendChild(div);

    titleInputElement.value = "";
    usernameInputElement.value = "";
    postInputElement.value = "";
}
