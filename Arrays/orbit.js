function orbit(input) {
    let xLen = input.shift();
    let yLen = input.shift();
    let result = [];
    
    // Create galaxy
    for (let i = 0; i < xLen; i++) {
        result.push([]);
        for (let o = 0; o < yLen; o++) {
            result[i].push(0);
        }
    };

    let x = input.shift();
    let y = input.shift();
    result[x][y] = 1;

    // set indexes
    for (let i = 0; i < xLen; i++) {
        for (let o = 0; o < yLen; o++) {
            if ((i >= x-1 && i <= x+1) && (o >= y-1 && o <= y+1) && result[i][o] == 0) {
                result[i][o] = 2;
            };
            if ((i >= x-2 && i <= x+2) && (o >= y-2 && o <= y+2) && result[i][o] == 0) {
                result[i][o] = 3;
            };
            if ((i >= x-3 && i <= x+3) && (o >= y-3 && o <= y+3) && result[i][o] == 0) {
                result[i][o] = 4;
            };
            if ((i >= x-4 && i <= x+4) && (o >= y-4 && o <= y+4) && result[i][o] == 0) {
                result[i][o] = 5;
            };
            if ((i >= x-5 && i <= x+5) && (o >= y-5 && o <= y+5) && result[i][o] == 0) {
                result[i][o] = 6;
            };
            if ((i >= x-6 && i <= x+6) && (o >= y-6 && o <= y+6) && result[i][o] == 0) {
                result[i][o] = 7;
            };
            if ((i >= x-7 && i <= x+7) && (o >= y-7 && o <= y+7) && result[i][o] == 0) {
                result[i][o] = 8;
            };
            if ((i >= x-8 && i <= x+8) && (o >= y-8 && o <= y+8) && result[i][o] == 0) {
                result[i][o] = 9;
            };
        }
    }
    result.forEach(x => console.log(x.join(' ')));
}
orbit([6, 4, 2, 2])