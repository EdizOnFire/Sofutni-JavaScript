const url = 'http://localhost:3030/jsonstore/messenger'
const messages = document.querySelector('#messages');

function attachEvents() {
    document.querySelector('#submit').addEventListener('click', postMessage);
    document.querySelector('#refresh').addEventListener('click', loadAllMessages);

}

async function postMessage() {
    const [author, content] = [document.querySelector('input[name="author"]'), document.querySelector('input[name="content"]')];
    if (author.value !== '' || content.value !== '') {
        await request(url, { author: author.value, content: content.value });
        author.value = '';
        content.value = '';
    }
}

async function loadAllMessages() {
    const response = await fetch(url)
    const data = await response.json()
    messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
}

async function request(url, option) {
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(option)
        };
    }

    const response = await fetch(url, option);
    return response.json();
}

attachEvents();
