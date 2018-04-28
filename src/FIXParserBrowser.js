/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { EventEmitter } from 'events';

import { Fields as FieldsCache } from './fields/Fields';
import { Enums as EnumsCache } from './enums/Enums';
import { Message } from './message/Message';
import Field from './../src/fields/Field';

const SOH = '\x01';
const STRING_A = '^A ';
const STRING_EQUALS = '=';
const RE_A = /\^A\s|\^A/g;
const RE_ESCAPE = /([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g; // eslint-disable-line no-useless-escape
const RE_PIPE = /\|/g;

function adjustForTimezone(date) {
    const timeOffsetInMS = date.getTimezoneOffset() * 60000;
    date.setTime(date.getTime() + timeOffsetInMS);
    return date;
}

export * from './../src/fields/Field';

export default class FIXParserBrowser extends EventEmitter {

    constructor() {
        super();
        this.re = new RegExp('^8=FIXT?.\\d.\\d([^\\d]+)\\d.*', 'i');
        this.processedData = '';
        this.message = new Message();
        this.fields = new FieldsCache();
        this.enums = new EnumsCache();
        this.messageSequence = 1;
    }

    connect() {
        console.error('FIXParser: connect() is only available in node.js environment');
    }

    getNextTargetMsgSeqNum() {
        return this.messageSequence;
    }

    setNextTargetMsgSeqNum(nextMsgSeqNum) {
        this.messageSequence = nextMsgSeqNum;
        return this.messageSequence;
    }

    getTimestamp(dateObject = new Date()) {
        if (isNaN(dateObject.getTime())) {
            console.error('Invalid date specified!');
        }
        const date = adjustForTimezone(dateObject);
        return `${date.getFullYear()}${Message.pad(date.getMonth() + 1, 2)}${Message.pad(date.getDate(), 2)}-${Message.pad(date.getHours(), 2)}:${Message.pad(date.getMinutes(), 2)}:${Message.pad(date.getSeconds(), 2)}.${Message.pad(date.getMilliseconds(), 3)}`;
    }

    preProcess(data) {
        this.message.reset();

        const match = this.re.exec(data);
        const firstSeparator = match && match.length === 2 ? match[1] : SOH;
        let separator = null;

        if(firstSeparator === SOH) {
            // SOH separator
            this.message.setString(data);
            this.processedData = data.split(SOH);
            return;
        } else if(firstSeparator === '|') {
            // | separator
            separator = RE_PIPE;
        } else if(firstSeparator === STRING_A) {
            // Multi-character separator
            separator = RE_A;
        } else {
            // Determine separator
            const escapedSeparatorCharacter = String.fromCharCode(firstSeparator).replace(RE_ESCAPE, '\\$&');
            separator = new RegExp(escapedSeparatorCharacter, 'g');
        }

        const stringData = data.replace(separator, SOH);
        this.message.setString(stringData);
        this.processedData = stringData.split(SOH);
    }

    createMessage(...fields) {
        return new Message(...fields);
    }

    parse(data) {
        let tag = null, value = null, i = 0, equalsOperator = '', item = {};

        if(!data) {
            console.error('No message specified!');
            return null;
        }

        this.preProcess(data);

        for (i; i < this.processedData.length - 1; i++) {

            equalsOperator = this.processedData[i].indexOf(STRING_EQUALS);

            tag = parseInt(this.processedData[i].substring(0, equalsOperator), 10);
            value = this.processedData[i].substring(equalsOperator + 1);

            item = new Field(tag, value);

            this.fields.processField(this.message, item);
            this.enums.processEnum(item);

            if(item.tag === 9) {
                this.message.validateBodyLength(value);
            } else if(item.tag === 10) {
                this.message.validateChecksum(value);
            }

            this.message.addField(item);
        }

        return this.message;
    }

    send() {
        console.error('FIXParser: send() is only available in node.js environment');
    }
}

export { Field };

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParserBrowser;
