function decodingSoftware(inputParameters) {
    let result = 0;
    let recievedMessages = [];

    // Recieve Docking Parameters
    while (inputParameters.length > 0) {
        let currentParameter = inputParameters.shift();
        let bitMask = currentParameter.shift().split('mask = ')[1];
        let code = {};
        recievedMessages.push(storeData(currentParameter, code, bitMask));
    };
    
    // Return Result
    let recievedMessageOutputs = calculateCoordinates(recievedMessages);
    result = recievedMessageOutputs.reduce((acc , x) => acc + x);
    return result;
};

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

// Store Data in Object
function storeData(parameter, code, bitMask) {
    parameter.map(line => {
    let [memory, entry] = line.split(' = ');
    memory = memory.match(/[\d+]/g).join('');
    let binaryCode = toBinary(parseInt(entry));
    code[memory] = {
        input: parseInt(entry),
        binary: binaryCode,
        output: applyMask(bitMask, binaryCode),
        };
    });
    return code;
};    

// Convert Decimal to Binary
function toBinary(n) {
    let binary = parseInt(n, 10).toString(2);
    let fill = '0'.repeat((36 - binary.length));
    return fill.concat(binary);
};

// Sum Coordinates
function calculateCoordinates(recievedMessages) {
    return recievedMessages.map(message => {
        return Object.values(message).reduce(((acc, x) => acc + x.output), 0);
    });
};

module.exports = {
    applyMask,
    toBinary
}

decodingSoftware(
    [
        [
            'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
            'mem[8] = 11',
            'mem[7] = 101',
            'mem[8] = 0'
        ],
        [
            'mask = 0010X0X100X011101X010X001110X00X1101',
            'mem[46114] = 15140',
            'mem[38354] = 6246405',
            'mem[3227] = 1976',
            'mem[46579] = 414875',
            'mem[20140] = 185761241'
        ],
        [
            'mask = 0X00100000X0X01001X001111X101011X110',
            'mem[11688] = 122943295',
            'mem[54669] = 820167',
            'mem[1156] = 12904',
            'mem[36883] = 436481745',
            'mem[49687] = 12497'
        ],
        [
            'mask = 000XX01000X01010100100X000X01110110X',
            'mem[10002] = 18361339',
            'mem[50031] = 261',
            'mem[16419] = 537704',
            'mem[48032] = 2783140'
        ]
    ]
)

