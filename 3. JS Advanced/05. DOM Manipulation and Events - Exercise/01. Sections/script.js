function create(words) {
    let parentElement = document.getElementById('content');
    let elements = words;
    for (let section of elements) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let text = document.createTextNode(section);

        parentElement.appendChild(div)
        div.appendChild(p);
        p.appendChild(text);
        p.style.display = 'none';
        div.addEventListener('click', function (event) {
            event.target.children[0].style.display = 'block';
        });
    }
}