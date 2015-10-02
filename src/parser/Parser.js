/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import {Fields} from './../fields/Fields';
import {Enums} from './../enums/Enums';
import {Message} from './../message/Message';

export class Parser {

    constructor() {
        this.SOH = '|';
        this.EQ = '=';
        this.processedData = '';
        this.message = new Message();
        this.fields = new Fields();
        this.enums = new Enums();
    }

    // Replace multiple-byte SOH to single-byte (e.g. NySE)
    replaceMultiByteSOH(data) {
        let separator = '_FIXPARSER_SEPARATOR_',
            multiByteSeparator = '_MULTIBYTE_SEPARATOR_';
        return data
                    .replace(/[^\x00-\x7F]/g, separator)
                    .replace(/\u0001/g, separator)
                    .replace(/\001/g, separator)
                    .replace(/\^A /g, separator)
                    .replace(/\^A/g, separator)
                    .replace(/\^/g, separator)
                    .replace(/\|/g, separator)
                    .replace(/[^A-Za-z 0-9\.,\?"!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|}\{\[\]`~]*/g, multiByteSeparator)
                    .replace(/_MULTIBYTE_SEPARATOR__MULTIBYTE_SEPARATOR_/g, this.SOH)
                    .replace(/_MULTIBYTE_SEPARATOR_/g, '')
                    .replace(/_FIXPARSER_SEPARATOR_/g, this.SOH);
    }

    preProcess(data) {
        this.processedData = data;
        this.message = new Message();
        this.message.string = data;
        this.processedData = this.replaceMultiByteSOH(this.processedData);
        this.message.string = this.replaceMultiByteSOH(this.message.string);
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

            equalsOperator = array[i].indexOf(this.EQ);

            tag = parseInt(array[i].substring(0, equalsOperator));
            value = array[i].substring(equalsOperator + 1);

            this.fields.process(this.message, item, tag, value);
            this.enums.process(item, tag, value);

            if(tag === 9) {
                this.message.validateBodyLength(value);
            }

            if(tag === 10) {
                this.message.validateChecksum(value);
            }

            item.tag = tag;

            this.message.data[i] = item;
        }

        return this.message;
    }
}