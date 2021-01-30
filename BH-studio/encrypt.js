function dockingSoftware(input) {

    // Recieve Docking Parameters
    let inputParameters = input.split('\n');
    let recievedMessages = [];
    let programResult = 0;

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
        applyMask(mask, current) {
            let splitMask = mask.split('');
            current = current.split('');
            for (let i = 0; i < 36; i++) {
                if (splitMask[i] !== 'X') {
                    current[i] = splitMask[i];
                }
            }
            current = current.join('');
            return this.toDecimal(current);
        }
    };

    // Read Current Message
    let currentMessage;
    inputParameters.forEach(line => {
        let [command, entry] = line.split(' = ');
        if (command.includes('mask')) {
            currentMessage = new Message(entry);
            recievedMessages.push(currentMessage);
        } else {
            memory = command
            .match(/[\d+]/g)
            .join('');
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
        for (let singleMemoryCode in dockingParameters.code) {
            let currentOutput = dockingParameters.code[singleMemoryCode].output
            let currentBinary = dockingParameters.code[singleMemoryCode].binary;

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
    `mask = XXX0X0X00X00X0X0X0XX0XXX001XX00101X0
    mem[26794] = 326029
    mem[26794] = 3479
    mem[26794] = 5229418
    mem[26794] = 59518329
    mem[26794] = 4021
    mask = 000000X1X1110X10X100001X001X00X1X101
    mem[13785] = 14683
    mem[22801] = 63583
    mem[15888] = 309486967
    mem[16644] = 1751
    mask = X0000X00XXX010X011011010X11X000000X1
    mem[46536] = 230918555
    mem[45646] = 293515330
    mem[46536] = 72857965
    mem[28342] = 3005
    mem[1998] = 12034321
    mem[9738] = 10515`
)