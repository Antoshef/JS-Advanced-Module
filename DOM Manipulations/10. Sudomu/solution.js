function solve() {
    // Take input
    let fullBoard = document.getElementsByTagName('tbody')[0];
    let rows = fullBoard.getElementsByTagName('tr');
    let buttons = document.getElementsByTagName('button');
    let table = document.getElementsByTagName('table')[0];
    let check = document.getElementById('check');
    let log = check.querySelector('p');

    // Add on click buttons
    let checkBtn = buttons[0];
    let clearBtn = buttons[1];
    checkBtn.addEventListener('click', checkResult);
    clearBtn.addEventListener('click', clearBoard);

    function checkResult() {
        let result = [];
        let countValues = {};
        for (let row = 0; row < 3; row++) {
            let currentRow = rows[row].getElementsByTagName('input');
            result.push([]);
            for (let col = 0; col < 3; col++) {
                let currentValue = currentRow[col].value;
                if (countValues[currentValue]) {
                    countValues[currentValue] += 1;
                } else {
                    countValues[currentValue] = 1;
                }
                result[row].push(currentValue);
            };
        };

        let checkValues = Object.values(countValues).every(x => x == 3);
        let answer = [];
        for (let i = 0; i < 3; i++) {
            let num = result[0][i];
            let secRow = result[1].indexOf(num);
            let thirdRow = result[2].indexOf(num);
            let checker = ((i != secRow) && (i != thirdRow) && (secRow != thirdRow));
            answer.push(checker);
        }
        let doubleCheck = answer.every(x => x == true);
        if (doubleCheck && checkValues) {
            table.style.border = '2px solid green';
            log.innerHTML = 'You solve it! Congratulations!'
            check.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            log.innerHTML = 'NOP! You are not done yet...'
            check.style.color = 'red';
        };
    };

    function clearBoard() {
        log.innerHTML = '';
        table.style.border = '';
        // check.style.color = '';
        for (let i = 0; i < 3; i++) {
            let current = rows[i].querySelectorAll('input');
            for (let o = 0; o < 3; o++) {
                current[o].value = '';
            };
        };
    };
};