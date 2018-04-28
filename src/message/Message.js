import Field, {
    BeginString,
    BodyLength,
    CheckSum
} from './../fields/Field';

const TAG_CHECKSUM = '10=';
const TAG_MSGTYPE = '35=';
const MARKER_BODYLENGTH = '\x02';
const MARKER_CHECKSUM = '\x03';

export function calculateBodyLength(value) {
    const startLength = value.indexOf(TAG_MSGTYPE) === -1 ? 0 : value.indexOf(TAG_MSGTYPE),
        endLength = value.indexOf(TAG_CHECKSUM) === -1 ? value.length : value.indexOf(TAG_CHECKSUM);

    return endLength - startLength;
}

export function calculateChecksum(value) {
    let integerValues = 0;

    for (let i = 0; i < value.length; i++) {
        integerValues += value.charCodeAt(i);
    }

    return Message.pad(integerValues & 255, 3); // eslint-disable-line no-use-before-define
}

export class Message {

    static pad(value, size) {
        const paddedString = `00${value}`;
        return paddedString.substr(paddedString.length - size);
    }

    constructor(...fields) {
        this.reset();

        // Add other tags
        fields.forEach((field) => {
            // dont push toString, push enum or whatever instead
            this.data.push(field);
        });
    }

    addField(field) {
        this.data.push(field);
    }

    setString(fixString) {
        this.string = fixString;
    }

    reset() {
        this.encodedArray = [];
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
            data = this.string.substring(0, length),
            calculatedChecksum = calculateChecksum(data);

        this.checksumValue = value;
        this.checksumExpected = calculatedChecksum;
        this.checksumValid = value === calculatedChecksum;
        return this.checksumValid;
    }

    encode(separator = '\x01') {

        // Add header
        this.encodedArray = [
            new Field(BeginString, 'FIX.4.2').toString(),
            new Field(BodyLength, MARKER_BODYLENGTH).toString()
        ];

        // Add other tags
        this.data.forEach((field) => {
            this.encodedArray.push(field.toString());
        });

        // Add trailer
        this.encodedArray.push(new Field(CheckSum, MARKER_CHECKSUM).toString());

        let fixMessage = `${this.encodedArray.join(separator)}${separator}`;
        fixMessage = fixMessage.replace(MARKER_BODYLENGTH, calculateBodyLength(fixMessage));

        const length = fixMessage.indexOf(TAG_CHECKSUM) === -1 ? fixMessage.length : fixMessage.indexOf(TAG_CHECKSUM);
        const data = fixMessage.substring(0, length);
        const calculatedChecksum = calculateChecksum(data);
        fixMessage = fixMessage.replace(MARKER_CHECKSUM, calculatedChecksum);

        return fixMessage;
    }
}

