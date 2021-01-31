// Creating Class to Store Messages and Methods
class Message {
    constructor(mask) {
        this.mask = mask;
        this.code = {}
    }

    // Convert Decimal to Binary
    toBinary(n) {
        let binary = parseInt(n, 10).toString(2);
        let fill = '0'.repeat((36 - binary.length));
        return fill.concat(binary);
    }

    // Convert Binary to Decimal
    toDecimal(current) {
        return parseInt(current, 2);
    }

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
    }
};

function dockingSoftware(input) {

    // Recieve Docking Parameters
    let inputParameters = input.split('\n');
    let recievedMessages = [];
    let programResult = 0;

    // Read Current Message
    let currentMessage;
    inputParameters.map(line => {
        let [command, entry] = line.split(' = ');
        if (command.includes('mask')) {
            currentMessage = new Message(entry);
            recievedMessages.push(currentMessage);
        } else {
            memory = command.match(/[\d+]/g).join('');
            currentMessage.code[memory] = {
                input: parseInt(entry),
                binary: currentMessage.toBinary(parseInt(entry)),
                output: 0,
            };
        };
    });
    
    // Interate through each Recieved Message
    for (let dockingParameters of recievedMessages) {
        let currentMessageResult = 0;
        let currentMask = dockingParameters.mask;
        for (let memoryCode in dockingParameters.code) {
            let currentOutput = dockingParameters.code[memoryCode].output
            let currentBinary = dockingParameters.code[memoryCode].binary;

            // Applying Mask to each Message Recieved
            currentOutput = currentMessage.applyMask(currentMask, currentBinary);
            currentMessageResult += currentOutput;
        }
        // Apply each Message Result to Final Result
        programResult += currentMessageResult;
    };

    // Printing Result
    console.log(programResult);
};

dockingSoftware(
    `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
    mem[8] = 11
    mem[7] = 101
    mem[8] = 0`
)