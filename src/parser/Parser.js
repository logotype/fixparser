/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import {Fields} from './../fields/Fields';
import {MessageTypes} from './../messagetypes/MessageTypes';
import {ExecTypes} from './../exectypes/ExecTypes';
import {DataTypes} from './../datatypes/Datatypes';

export class Parser {

    constructor() {
        this.rawData = '';
        this.processedData = '';
        this.message = [];
        this.fields = new Fields();
        this.messageTypes = new MessageTypes();
        this.execTypes = new ExecTypes();
        this.dataTypes = new DataTypes();
    }

    parse(data) {

        let startOfHeader, tag, value, array, dataLength, lastByte, i = 0, equalsOperator, item;

        if(!data) {
            throw new Error('No message specified!');
        }

        this.rawData = data;
        this.processedData = data;
        this.message = [];

        // Strip whitespaces
        this.processedData = this.processedData.replace(/ /g, '');

        // Weird SOH (NySE only?? should be 1 byte!)
        this.processedData = this.processedData.replace(/\^A/g, '|');

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

            this.fields.process(item, tag, value);
            this.messageTypes.process(item, tag, value);
            this.execTypes.process(item, tag, value);
            this.dataTypes.process(item, tag, value);

            if(tag === 10) {
                item.valid = this.validateChecksum(value);
            }

            item.tag = tag;

            this.message[i] = item;
        }

        return this.message;
    }

    pad(value, size) {
        let paddedString = '00' + value;
        return paddedString.substr(paddedString.length - size);
    }

    validateChecksum(value) {
        var integerValues = 0,
            length = this.rawData.indexOf('10=') !== -1 ? this.rawData.indexOf('10=') : this.rawData.length;

        for(let i = 0; i < length; i++) {
            integerValues += this.rawData.charCodeAt(i);
        }
        // TODO: add leading zeroes if needeed

        if(value === this.pad(integerValues % 256, 3)) {
            console.log('>>>>>>>>>> VALID! ' + value);
        } else {
            console.log(value + ', actually: ' + this.pad(integerValues % 256, 3));
        }

        return value === this.pad(integerValues % 256, 3);
    }
}