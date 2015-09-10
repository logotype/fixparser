/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
export class Message {
    constructor() {
        this.data = [];
        this.string = '';
        this.bodyLengthValid = false;
        this.checksumValid = false;
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

    pad(value, size) {
        let paddedString = '00' + value;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        let regexp = /([0-9]+)=([^|]*)/g,
            length = this.string.indexOf('10=') !== -1 ? this.string.indexOf('10=') : this.string.length,
            data = this.string.substr(0, length),
            byteOffset = 0,
            integerValues = 0,
            result;

        while((result = regexp.exec(data)) !== null) {
            let pair = result[0];
            for(let i = 0; i < pair.length; i++) {
                integerValues += pair.charCodeAt(i);
            }
            byteOffset += 1;
        }

        integerValues += byteOffset;

        this.checksumValue = value;
        this.checksumExpected = this.pad(integerValues % 256, 3);
        this.checksumValid = value === this.pad(integerValues % 256, 3);
        return this.checksumValid;
    }
}