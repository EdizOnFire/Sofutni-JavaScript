import { deleteById, getById } from "../api/data.js";

const section = document.querySelector("#detailsPage");

export async function showDetails(context, id) {
    const idea = await getById(id);
    context.showSection(section);

    const user = JSON.parse(localStorage.getItem("user"));
    const isOwner = user && user._id == idea._ownerId;
    section.innerHTML = createIdeaHTML(idea, isOwner);
    if (isOwner) {
        section.querySelector("#deleteBtn").addEventListener("click", async (e) => {
            const choice = confirm("Are you sure you want to delete this idea?");
            if (choice) {
                await deleteById(id);
                context.goTo("/catalog");
            }
        });
    }
}

function createIdeaHTML(idea, isOwner) {
    let html = `
    <img class="det-img" src="${idea.img}" />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="${idea.description}">There are few things as comforting as heaping bowl of pasta at the end of a long
                day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
                pasta
                makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
                versatility.</p>
        </div>`;

    if (isOwner) {
        html += `
           <div class="text-center">
            <a id='deleteBtn' class="btn detb" href="">Delete</a>
        </div>`;
    }

    return html;
}
