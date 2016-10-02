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
        const startLength = this.string.indexOf('35=') === -1 ? 0 : this.string.indexOf('35='),
        endLength = this.string.indexOf('10=') === -1 ? this.string.length : this.string.indexOf('10='),
        bodyLength = endLength - startLength;

        this.bodyLengthValue = parseInt(value, 10);
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = parseInt(value, 10) === bodyLength;
        return this.bodyLengthValid;
    }

    static pad(value, size) {
        const paddedString = `00${value}`;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        const length = this.string.indexOf('10=') === -1 ? this.string.length : this.string.indexOf('10='),
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