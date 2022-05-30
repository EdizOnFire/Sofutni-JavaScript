function getArticleGenerator(input) {
    let articles = input;
    return () => {
        if (articles.length > 0) {
            let container = document.getElementById('content');
            let currentText = articles.shift();
            let article = document.createElement('article');
            article.innerText = currentText;
            container.appendChild(article);
        }
    }
}
