function solve() {

    let buttonElement = document.getElementsByTagName('button');
    let inputElement = document.getElementsByTagName('input');

    buttonElement[0].addEventListener('click', function() {
        let name = inputElement[0].value;
        name = name.split(' ');

        for (let line of name) {
            let index = line.charCodeAt(0);
            if (index > 90) {
                index -= 97;
            } else {
                index -= 65;
            };
            let currentLiElement = document.getElementsByTagName('li');
    
            if (currentLiElement[index].innerHTML.length === 0) {
                currentLiElement[index].innerHTML = line;
            } else {
                currentLiElement[index].innerHTML = currentLiElement[index].innerHTML + ', ' + line;
            };
            inputElement[0].value = '';
        };
    });
}