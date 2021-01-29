function decoding(input) {

    // Recieve Docking Parameters
    let parameters = input
    .trim()
    .split('\n');
    let messages = [];
    let result = 0;

    class Message {
        constructor(mask) {
            this.mask = mask;
            this.code = {}
        }

        toBinary(n) {
            let bit = parseInt(n, 10).toString(2);
            let fill = '0'.repeat((36 - bit.length));
            return fill.concat(bit);
        }

        toDecimal(current) {
            return parseInt(current, 2);
        }

        maskElements(mask, current) {
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

    let currentMessage;
    parameters.forEach(line => {
        let [log, entry] = line.split(' = ');
        if (log.includes('mask')) {
            currentMessage = new Message(entry);
            messages.push(currentMessage);
        } else {
            memory = log
            .match(/[\d+]/g)
            .join('');
            currentMessage.code[memory] = {
                input: parseInt(entry),
                binary: currentMessage.toBinary(parseInt(entry)),
                output: 0,
            };
        }
    });
    // Store Data
    
    for (let key of messages) {
        let currentMessageResult = 0;
        for (let each in key.code) {
            let currentMask = key.mask;
            let currentOutput = key.code[each].output
            let currentBinary = key.code[each].binary;
            currentOutput = currentMessage.maskElements(currentMask, currentBinary);
            currentMessageResult += currentOutput;
        }
        console.log(currentMessageResult);
        result += currentMessageResult;
    }

    // Printing Result
    console.log(result);
}

decoding(
    `mask = 11X010X00X00X010X0X10111001XX00101X0
    mem[38290] = 326029
    mem[48830] = 3479
    mem[17055] = 5229418
    mem[38324] = 59518329
    mem[26794] = 40212272
    mask = 000000X1X1110X10X100001X001X00X1X101
    mem[13785] = 14683
    mem[22801] = 63583
    mem[15888] = 309486967
    mem[16644] = 1751
    mask = X0000X00X11010X011011010X11X000000X1
    mem[46536] = 230918555
    mem[45646] = 293515330
    mem[34129] = 72857965
    mem[28342] = 3005
    mem[1998] = 12034321
    mem[9738] = 10515`
)