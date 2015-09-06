/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import {Fields} from './../fields/Fields';
import {Enums} from './../enums/Enums';

export class Parser {

    constructor() {
        this.rawData = '';
        this.processedData = '';
        this.message = {};
        this.fields = new Fields();
        this.enums = new Enums();
    }

    parse(data) {

        let startOfHeader, tag, value, array, dataLength, lastByte, i = 0, equalsOperator, item;

        if(!data) {
            throw new Error('No message specified!');
        }

        this.preProcess(data);

        startOfHeader = this.processedData.charAt(9);
        array = this.processedData.split(startOfHeader);

        lastByte = this.processedData.charAt(this.processedData.length - 1) === startOfHeader ? 1 : 0;
        dataLength = array.length - lastByte;

        for (i; i < dataLength; i++) {

            item = {};

            equalsOperator = array[i].indexOf('=');

            if (equalsOperator === -1) {
                item.error = 'Error: ' + array[i];
                continue;
            }

            tag = parseInt(array[i].substring(0, equalsOperator));
            value = array[i].substring(equalsOperator + 1);

            this.fields.process(this.message, item, tag, value);
            this.enums.process(item, tag, value);

            if(tag === 9) {
                this.message.validBodyLength = this.validateBodyLength(value);
            }

            if(tag === 10) {
                this.message.validChecksum = this.validateChecksum(value);
            }

            item.tag = tag;

            this.message.data[i] = item;
        }

        return this.message;
    }

    replaceMultiByteSOH(data) {
        // Replace multiple-byte SOH to single-byte (e.g. NySE)
        return data.replace(/\^A /g, '|').replace(/\^A/g, '|');
    }

    preProcess(data) {
        this.rawData = data;
        this.processedData = data;
        this.message = {};
        this.message.data = [];
        this.processedData = this.replaceMultiByteSOH(this.processedData);
        this.rawData = this.replaceMultiByteSOH(this.rawData);
    }

    validateBodyLength(value) {
        let startLength = this.rawData.indexOf('35=') !== -1 ? this.rawData.indexOf('35=') : 0,
            endLength = this.rawData.indexOf('10=') !== -1 ? this.rawData.indexOf('10=') : this.rawData.length,
            bodyLength = endLength - startLength;

        return value === String(bodyLength);
    }

    pad(value, size) {
        let paddedString = '00' + value;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        let regexp = /([0-9]+)=([^|;\001]*)/g,
            length = this.rawData.indexOf('10=') !== -1 ? this.rawData.indexOf('10=') : this.rawData.length,
            data = this.rawData.substr(0, length),
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

        return value === this.pad(integerValues % 256, 3);
    }
}