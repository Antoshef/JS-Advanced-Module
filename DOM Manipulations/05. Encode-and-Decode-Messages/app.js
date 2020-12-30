function encodeAndDecodeMessages() {
    
    let regular = document.getElementById('main').getElementsByTagName('div')[0];
    let coded = document.getElementById('main').getElementsByTagName('div')[1];
    let i;

    regular.querySelector('button').addEventListener('click', () => {
        i = 0;
        let bottomTextArea = coded.querySelector('textarea');
        let regularText = regular.querySelector('textarea').value;
        let codedText = coding(regularText);
        bottomTextArea.value = codedText;
        regular.querySelector('textarea').value = '';
    });

    coded.querySelector('button').addEventListener('click', () => {
        if (i == 0) {
            let encodedText = encoding(coded.querySelector('textarea').value);
            coded.querySelector('textarea').value = encodedText;
            i++;
        }; 
    });

    function coding(text) {
        let coded = '';
        text = text.split('')
        .forEach(element => {
            let x = element.charCodeAt();
            x++;
            coded += String.fromCharCode(x);
        });
        return coded;
    };

    function encoding(text) {
        let cod = '';
        text = text.split('')
        .forEach(element => {
            let x = element.charCodeAt();
            x--;
            cod += String.fromCharCode(x);
        });
        return cod;
    };

};