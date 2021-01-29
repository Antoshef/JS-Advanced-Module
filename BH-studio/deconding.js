function decoding(input) {

    // Recieve Docking Parameters
    let mask = input
    .shift()
    .split('mask = ')[1];
    let code = {};
    let result = 0;

    // Store Data
    input.forEach(line => {
        let [memory, entry] = line.split(' = ');
        memory = memory
        .match(/[\d+]/g)
        .join('');
        code[memory] = {
            input: parseInt(entry),
            binary: toBinary(parseInt(entry)),
            output: 0,
        };
    });

    // Iterate through Input Codes
    for (let key in code) {
        code[key].output = maskElements(mask, code[key].binary);
        result += code[key].output;
    }

    // Masking each Element
    function maskElements(mask, current) {
        let splitMask = mask.split('');
        current = current.split('');
        for (let i = 0; i < 36; i++) {
            if (splitMask[i] !== 'X') {
                current[i] = splitMask[i];
            }
        }
        current = current.join('');

        // Convert Binary to Decimal
        return parseInt(current, 2);
    }

    // Convert Decimal to Binary
    function toBinary(n) {
        let bit = parseInt(n, 10).toString(2);
        let fill = '0'.repeat((36 - bit.length));
        return fill.concat(bit);
    }

    // Printing Result
    console.log(result);
}

decoding(
    [
        'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        'mem[8] = 11',
        'mem[7] = 101',
        'mem[8] = 0'
    ]
)