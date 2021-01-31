// Creating Class to Store Messages and Methods
let commands = {
    // Split and Sort Input Messages
    splitMessages(input) {
        let inputParameters = input.split('\n');
        let result = [];
        let current = [];
        current.push(inputParameters.shift());
        inputParameters.map(x => {
            if (x.includes('mask')) {
                result.push(current);
                current = [];
                current.push(x);
            } else {
                current.push(x);
            }
        })
        result.push(current);
        return result;
    },

    // Read Current Message
    readMessage(inputParameters) {
        let code = {};
        inputParameters.map(x => {
            let mask = x.shift().split(' = ')[1];
            x.map(line => {
                let [command, entry] = line.split(' = ');
                memory = command.match(/[\d+]/g).join('');
                let binary = commands.toBinary(parseInt(entry));
                code[memory] = {
                    input: parseInt(entry),
                    binary: binary,
                    output: commands.applyMask(mask, binary),
                };    
            });
        });
        return code;
    },

    // Convert Decimal to Binary
    toBinary(n) {
        let binary = parseInt(n, 10).toString(2);
        let fill = '0'.repeat((36 - binary.length));
        return fill.concat(binary);
    },

    // Convert Binary to Decimal
    toDecimal(current) {
        return parseInt(current, 2);
    },

    // Transform Binary input using Mask
    applyMask(bitMask, binary) {
        let splitMask = bitMask.split('');
        binary = binary.split('');
        for (let i = 0; i < 36; i++) {
            if (splitMask[i] !== 'X') {
                binary[i] = splitMask[i];
            }
        }
        binary = binary.join('');
        return this.toDecimal(binary);
    },
    
    // Sum Each line of Code
    sumCodeOutputs(input) {
        let sum = Object.values(input).reduce(((acc, x) => acc + x.output), 0);
        return sum;
    }
};

function dockingSoftware(input) {
    // Recieve Docking Parameters
    let allMessages = commands.splitMessages(input);

    // Read Current Message
    let currentMessage = commands.readMessage(allMessages);
    let programResult = commands.sumCodeOutputs(currentMessage);
    return programResult;
};

dockingSoftware(
    `'mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X',
    'mem[8] = 11',
    'mem[7] = 101',
    'mem[8] = 0'
    'mask = 0010X0X100X011101X010X001110X00X1101',
    'mem[46114] = 15140',
    'mem[38354] = 6246405',
    'mem[3227] = 1976',
    'mem[46579] = 414875',
    'mem[20140] = 185761241'
    'mask = 0X00100000X0X01001X001111X101011X110',
    'mem[11688] = 122943295',
    'mem[54669] = 820167',
    'mem[1156] = 12904',
    'mem[36883] = 436481745',
    'mem[49687] = 12497'
    'mask = 000XX01000X01010100100X000X01110110X',
    'mem[10002] = 18361339',
    'mem[50031] = 261',
    'mem[16419] = 537704',
    'mem[48032] = 2783140'`
)

