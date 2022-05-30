import { url, containerElement } from './home.js';
import { hideContent } from "./app.js";

export async function postComment(data) {
    const response = await fetch(url + "comments", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    });

    hideContent()
    const div = document.createElement('div')
    const userComment = `<div class="topic-container">
    <div class="topic-name-wrapper">
      <div class="topic-name">
        <a href="#" class="normal">
          <h2>Angular 10</h2>
        </a>
        <div class="columns">
          <div>
            <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
            <div class="nick-name">
              <p>Username: <span>David</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="comment">
    <div class="header">
      <img src="./static/profile.png" alt="avatar" />
      <p><span>David</span> posted on <time>2020-10-10 12:08:28</time></p>
  
      <p class="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facere sint
        dolorem quam, accusantium ipsa veniam laudantium inventore aut, tenetur
        quibusdam doloribus. Incidunt odio nostrum facilis ipsum dolorem deserunt
        illum?
      </p>
    </div>
  </div>`
    div.innerHTML = userComment
    containerElement.appendChild(div)
}
