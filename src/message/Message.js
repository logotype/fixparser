export class Message {

    constructor() {

        this.regexp = /([0-9]+)=([^|]*)/g;

        this.data = [];
        this.string = '';
        this.bodyLengthValid = false;
        this.checksumValid = false;

        this.checksumValue = null;
        this.checksumExpected = null;
        this.bodyLengthValue = null;
        this.bodyLengthExpected = null;
    }

    reset() {
        this.data = [];
        this.string = '';
        this.bodyLengthValid = false;
        this.checksumValid = false;
        this.checksumValue = null;
        this.checksumExpected = null;
        this.bodyLengthValue = null;
        this.bodyLengthExpected = null;
    }

    validateBodyLength(value) {
        let startLength = this.string.indexOf('35=') !== -1 ? this.string.indexOf('35=') : 0,
        endLength = this.string.indexOf('10=') !== -1 ? this.string.indexOf('10=') : this.string.length,
        bodyLength = endLength - startLength;

        this.bodyLengthValue = parseInt(value);
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = parseInt(value) === bodyLength;
        return this.bodyLengthValid;
    }

    static pad(value, size) {
        let paddedString = '00' + value;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        let length = this.string.indexOf('10=') !== -1 ? this.string.indexOf('10=') : this.string.length,
            data = this.string.substr(0, length),
            byteOffset = 0,
            integerValues = 0,
            result;

        while((result = this.regexp.exec(data)) !== null) {
            let pair = result[0];
            for(let i = 0; i < pair.length; i++) {
                integerValues += pair.charCodeAt(i);
            }
        }

        integerValues += byteOffset;

        this.checksumValue = value;
        this.checksumExpected = Message.pad(integerValues % 256, 3);
        this.checksumValid = value === Message.pad(integerValues % 256, 3);
        return this.checksumValid;
    }
}