function solution(input) {
    let num = input
    return (current) => num + current;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
