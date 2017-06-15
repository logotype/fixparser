const TAG_CHECKSUM = '10=';
const TAG_MSGTYPE = '35=';

export class Message {

    static pad(value, size) {
        const paddedString = `00${value}`;
        return paddedString.substr(paddedString.length - size);
    }

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
        const startLength = this.string.indexOf(TAG_MSGTYPE) === -1 ? 0 : this.string.indexOf(TAG_MSGTYPE),
        endLength = this.string.indexOf(TAG_CHECKSUM) === -1 ? this.string.length : this.string.indexOf(TAG_CHECKSUM),
        bodyLength = endLength - startLength;

        this.bodyLengthValue = parseInt(value, 10);
        this.bodyLengthExpected = bodyLength;
        this.bodyLengthValid = parseInt(value, 10) === bodyLength;
        return this.bodyLengthValid;
    }

    validateChecksum(value) {
        const length = this.string.indexOf(TAG_CHECKSUM) === -1 ? this.string.length : this.string.indexOf(TAG_CHECKSUM),
            data = this.string.substring(0, length);

        let integerValues = 0;

        for (let i = 0; i < data.length; i++) {
            integerValues += data.charCodeAt(i);
        }

        const paddedValue = Message.pad(integerValues & 255, 3);

        this.checksumValue = value;
        this.checksumExpected = paddedValue;
        this.checksumValid = value === paddedValue;
        return this.checksumValid;
    }
}
