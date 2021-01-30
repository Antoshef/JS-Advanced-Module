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
    function maskElements(mask, currentBinary) {
        let splitMask = mask.split('');
        currentBinary = currentBinary.split('');
        for (let i = 0; i < 36; i++) {
            if (splitMask[i] !== 'X') {
                currentBinary[i] = splitMask[i];
            }
        }
        currentBinary = currentBinary.join('');

        // Convert Binary to Decimal
        return parseInt(currentBinary, 2);
    }

    // Convert Decimal to Binary
    function toBinary(n) {
        let binary = parseInt(n, 10).toString(2);
        let fill = '0'.repeat((36 - binary.length));
        return fill.concat(binary);
    }

    // Printing Result
    console.log(result);
}

decoding(
    [
        'mask = X0000X00X11010X011011010X11X000000X1',
        'mem[46536] = 230918555',
        'mem[45646] = 293515330',
        'mem[34129] = 72857965',
        'mem[28342] = 3005',
        'mem[1998] = 12034321',
        'mem[9738] = 10515'
    ]
)