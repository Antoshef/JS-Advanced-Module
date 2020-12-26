function magicMatrix(input) {
    let rowSum = 0;
    let end = true;
    let lastSum = input[0].reduce((acc, x) => acc + x);
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        rowSum = current.reduce((acc, x) => acc + x);
        if (rowSum !== lastSum) {
            end = false;
            break;
        };
        lastSum = 0;
        for (let o = 0; o < input.length; o++) {
            let col = input[o][i];
            lastSum += col;
        };
        if (rowSum !== lastSum) {
            end = false;
            break;
        };
    }
    console.log(end);
}
magicMatrix(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
)