function getArticleGenerator(articles) {


    function display() {
        let divElement = document.getElementById('content');
        let parElement = document.createElement('article');
        while (articles.length > 0) {
            parElement.innerHTML += articles.shift();
            return divElement.appendChild(parElement);
        }
    }
    return display;
}