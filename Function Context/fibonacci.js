function getFibonator() {
    let currentNum = 0;
    let last = 1;

    function fib()  {
        let result = currentNum + last;
        last = currentNum;
        currentNum = result;
        return result;
    };

    return fib;
};

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
