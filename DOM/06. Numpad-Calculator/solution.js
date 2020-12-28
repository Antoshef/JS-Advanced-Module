function solve() {

    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');

    document.querySelector('.clear').addEventListener('click', clear);
    document.querySelector('.keys').addEventListener('click', symbolClicked);


    function clear() {
        expressionOutput.textContent = '';
        resultOutput.textContent = '';
    };

    function symbolClicked(event) {
        let buttonPressed = event.target.value;

        switch (buttonPressed) {
            case '/':
            case '*':
            case '+':
            case '-':
            expressionOutput.textContent += ` ${buttonPressed} `;
            break;
            case '=':
                let [leftOperand, operator, rightOperand] = expressionOutput.textContent.split(' ');
                leftOperand = +leftOperand;
                rightOperand = +rightOperand;
                if (!rightOperand || !operator) {
                    resultOutput.textContent = 'NaN';
                } else {
                    let result = 0;
                    switch (operator) {
                        case '*':
                        result = Number(leftOperand) * Number(rightOperand);
                        break;
                        case '/':
                        result = Number(leftOperand) / Number(rightOperand);
                        break;
                        case '+':
                        result = Number(leftOperand) + Number(rightOperand);
                        break;
                        case '-':
                        result = Number(leftOperand) - Number(rightOperand);
                        break;
                    };
                    resultOutput.textContent = Number(result);
                };
                break;
                default:
                    expressionOutput.textContent += buttonPressed;
        };
    };

};