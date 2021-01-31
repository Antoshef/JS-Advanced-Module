function decoding(inputParameters) {

    // Recieve Docking Parameters
    let bitMask = inputParameters.shift().split('mask = ')[1];
    let code = {};
    let result = 0;

    // Store Data
    inputParameters.map(line => {
        let [memory, entry] = line.split(' = ');
        memory = memory.match(/[\d+]/g).join('');
        code[memory] = {
            input: parseInt(entry),
            binary: toBinary(parseInt(entry)),
            output: 0,
        };
    });

    // Iterate through Input Codes
    for (let key in code) {
        code[key].output = applyMask(bitMask, code[key].binary);
        result += code[key].output;
    };
    
    // Printing Result
    console.log(result);
}

// Apply Mask to each Line of Code
function applyMask(bitMask, currentBinary) {
    bitMask = bitMask.split('');
    currentBinary = currentBinary.split('');
    for (let i = 0; i < 36; i++) {
        if (bitMask[i] !== 'X') {
            currentBinary[i] = bitMask[i];
        };
    };
    currentBinary = currentBinary.join('');

    // Convert Binary to Decimal
    return parseInt(currentBinary, 2);
};

// Convert Decimal to Binary
function toBinary(n) {
    let binary = parseInt(n, 10).toString(2);
    let fill = '0'.repeat((36 - binary.length));
    return fill.concat(binary);
};


decoding(
    [
        'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
        'mem[8] = 11',
        'mem[7] = 101',
        'mem[8] = 0',
    ]
)