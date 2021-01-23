function solution() {
    
    let addGiftsBtn = document.getElementsByClassName('card')[0].getElementsByTagName('button')[0];
    let inputField = document.getElementsByClassName('card')[0].getElementsByTagName('input')[0];
    let list = document.getElementsByClassName('card')[1];
    let sent = document.getElementsByClassName('card')[2].getElementsByTagName('ul')[0];
    let discarded = document.getElementsByClassName('card')[3].getElementsByTagName('ul')[0];

    // Adding Gifts
    addGiftsBtn.addEventListener('click', () => {
        let element = document.createElement('li');
        element.className = 'gift';
        element.innerHTML = `${inputField.value}`;
        let btnSend = document.createElement('button');
        btnSend.id = 'sendButton';
        btnSend.innerHTML = 'Send';
        let discBtn = document.createElement('button');
        discBtn.id = 'discardButton';
        discBtn.innerHTML = 'Discard';
        element.appendChild(btnSend);
        element.appendChild(discBtn);
        list.appendChild(element);
        
        // Sorting
        sorting(list);

        inputField.value = '';

        // Send from list
        let listBtnElements = list.getElementsByTagName('button');
        for (let i = 0; i < listBtnElements.length; i++) {
            let current = listBtnElements[i];
            current.addEventListener('click', () => {
                let item = current.parentElement;
                let buttons = item.getElementsByTagName('button');
                if (current.innerHTML == 'Send') {
                    item.removeChild(buttons[0]);
                    item.removeChild(buttons[0]);
                    sent.appendChild(item);
                    sorting(sent);
                    console.log(sent);
                } else {
                    item.removeChild(buttons[0]);
                    item.removeChild(buttons[0]);
                    discarded.appendChild(item);
                    sorting(discarded);
                    console.log(discarded);
                }
            })
        }
    });

    function sorting(input) {
        [...input.getElementsByClassName('gift')]
        .sort((a, b) => a.innerText > b.innerText?1:-1)
        .forEach(node=>input.appendChild(node));
    }
}