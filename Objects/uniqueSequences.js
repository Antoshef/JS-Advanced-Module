function uniqueSequences(input) {
    let result = [];
    
    for (let line of input) {
        line = JSON.parse(line);
        let check = false;
        line.sort((a, b) => b - a);
        for (let word of result) {
            if (line.join('') == word.join('')) {
                check = true;
            }
        }
        if (!check) {
            result.push(line);
        };
    };
    let sorted = result.sort((a, b) => a.length - b.length);
    for (let line of sorted) {
        console.log(`[${line.join(', ')}]`);
    };
};
uniqueSequences(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 5]"]
    
)