

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let result = document.getElementById('result');
function solve() {

    let obj = {
        add() {
            return num1.value + num2.value;
        },
    
        substract() {
            return num1.value - num2.value;
        },

        init(selector1, selector2, resultSelector) {
            selector1,
            selector2,
            resultSelector
        }
    }

    return obj
}
