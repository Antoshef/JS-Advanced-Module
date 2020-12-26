function diagonalAttack(input) {
    let result = [];
    input.forEach(element => {
        result.push(element.split(' '));
    });
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < result.length; i++) {
        for (let o = 0; o < result.length; o++) {
            if (i == o) {
                leftSum += Number(result[i][o]);
            };
            if (o == ((result.length - 1) - i)) {
                rightSum += Number(result[i][o]);
            };
        }
    }
    if (leftSum == rightSum) {
        for (let i = 0; i < result.length; i++) {
            for (let o = 0; o < result.length; o++) {
                if (i !== o && o !== ((result.length - 1) - i)) {
                    result[i][o] = leftSum;
                };
            }
        }
    }
    result.forEach(x => console.log(x.join(' ')));
}
diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
    
)