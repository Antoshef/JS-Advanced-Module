function solve() {

    let input = document.getElementById('input');
    let menuToElement = document.getElementById('selectMenuTo');
    let resultElement = document.getElementById('result');
    let buttonElement = document.getElementsByTagName('button');

    let binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';
    let hexadeicmal = document.createElement('option');
    hexadeicmal.textContent = 'Hexadeicmal';
    hexadeicmal.value = 'hexadecimal';
    menuToElement.appendChild(binary);
    menuToElement.appendChild(hexadeicmal);

    buttonElement[0].addEventListener("click", function() {
        let n = Number(input.value);
        let current = menuToElement.value;
        
            if (n < 0) {
              n = 0xFFFFFFFF + n + 1;
             } 
        switch (current)  
        {  
        case 'binary':  
        return resultElement.value = (parseInt(n, 10).toString(2));
        case 'hexadecimal':  
        return resultElement.value = (parseInt(n, 10).toString(16).toUpperCase());
        };

    });
};