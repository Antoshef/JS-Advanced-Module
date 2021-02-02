const assert = require('chai').assert;
const func = require('./deconding');

describe('Test Mask', function() {
    it('Should return the masked binary, after recieving regular binary', () => {
        let mask = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X';
        let binary = '000000000000000000000000000000010110';
        let result = func.applyMask(mask, binary);
        assert.equal(result, 84);
    });
});

describe('Test Convert to Binary', function() {
    it('Should convert decimal to binary', () => {
        let number = 30;
        let result = func.toBinary(number);
        assert.equal(result, '000000000000000000000000000000011110');
    });
});