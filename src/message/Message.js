export class Message {

    constructor() {

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
        const startLength = this.string.indexOf('35=') !== -1 ? this.string.indexOf('35=') : 0,
        endLength = this.string.indexOf('10=') !== -1 ? this.string.indexOf('10=') : this.string.length,
        bodyLength = endLength - startLength;

        this.bodyLengthValue = parseInt(value);
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = parseInt(value) === bodyLength;
        return this.bodyLengthValid;
    }

    static pad(value, size) {
        const paddedString = `00${value}`;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        const length = this.string.indexOf('10=') !== -1 ? this.string.indexOf('10=') : this.string.length,
            data = this.string.substr(0, length);

        let integerValues = 0,
            paddedValue = '';

        for(let i = 0; i < data.length; i++) {
            integerValues += data.charCodeAt(i);
        }

        paddedValue = Message.pad(integerValues & 255, 3);

        this.checksumValue = value;
        this.checksumExpected = paddedValue;
        this.checksumValid = value === paddedValue;
        return this.checksumValid;
    }
}