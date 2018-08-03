class SecretHandshake {
    constructor(operation) {
        if (isNaN(operation)){throw new Error ('Handshake must be a number')}
        this.operation = operation;
        
    }
    commands() {
        var operation = this.operation;
        var binary = 0;
        var result = [];
        binary = decimalToBinary(operation);
        if (binary[binary.length - 1] == 1) { result.push("wink") };
        if (binary[binary.length - 2] == 1) { result.push("double blink") };
        if (binary[binary.length - 3] == 1) { result.push("close your eyes") };
        if (binary[binary.length - 4] == 1) { result.push("jump") };
        if (binary[binary.length - 5] == 1) { result.reverse() };
        return result;
    }
}

function decimalToBinary(number) {
    return Number(number).toString(2);
}


module.exports = SecretHandshake;


