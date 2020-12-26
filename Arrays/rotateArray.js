function rotateArray(input) {
    let rotator = Number(input.pop());
    let result = input;
    for (let i = 0; i < rotator; i++) {
        let index = result.pop();
        result.unshift(index);
    }
    console.log(result.join(' '));
}
rotateArray(
    ['asd',
    '2']
    
)