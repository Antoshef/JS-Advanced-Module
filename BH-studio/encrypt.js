// Creating Class to Store Messages and Methods
let commands = {
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
};

function dockingSoftware(input) {
    // Recieve Docking Parameters
    let recievedMessages = [];
    let programResult = 0;

    let allMessages = commands.splitMessages(input);

    // Read Current Message
    let currentMessage = commands.readMessage(allMessages);
    recievedMessages.push(currentMessage);
};

dockingSoftware(
    `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
    mem[8] = 11
    mem[7] = 101
    mem[8] = 0
    mask = 00X01010000010101X010X01X100010011X0
    mem[23911] = 21827
    mem[37956] = 3727083`
)