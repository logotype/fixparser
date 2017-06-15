/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2017 Victor Norgren
 * Released under the MIT license
 */
import {EventEmitter} from 'events';

import {Fields} from './fields/Fields';
import {Enums} from './enums/Enums';
import {Message} from './message/Message';

const SOH = '\x01';
const STRING_A = '^A ';
const STRING_EQUALS = '=';
const RE_A = /\^A\s|\^A/g;
const RE_ESCAPE = /([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g; // eslint-disable-line no-useless-escape
const RE_PIPE = /\|/g;

export default class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.processedData = '';
        this.message = new Message();
        this.fields = new Fields();
        this.enums = new Enums();
    }

    preProcess(data) {
        this.message.reset();

        const firstSeparator = data.charCodeAt(9);
        let separator = null;

        if(firstSeparator === 124) {
            // | separator
            separator = RE_PIPE;
        } else if(firstSeparator === 1) {
            // SOH separator
            this.message.string = data;
            this.processedData = data.split(SOH);
            return;
        } else if(data.substring(9, 12) === STRING_A) {
            // Multi-character separator
            separator = RE_A;
        } else {
            // Determine separator
            const escapedSeparatorCharacter = String.fromCharCode(firstSeparator).replace(RE_ESCAPE, '\\$&');
            separator = new RegExp(escapedSeparatorCharacter, 'g');
        }

        const stringData = data.replace(separator, SOH);
        this.message.string = stringData;
        this.processedData = stringData.split(SOH);
    }

    parse(data) {

        let value = null, i = 0, equalsOperator = '', item = {};

        if(!data) {
            throw new Error('No message specified!');
        }

        this.preProcess(data);

        for (i; i < this.processedData.length - 1; i++) {

            item = {};

            equalsOperator = this.processedData[i].indexOf(STRING_EQUALS);

            item.tag = parseInt(this.processedData[i].substring(0, equalsOperator), 10);
            value = this.processedData[i].substring(equalsOperator + 1);

            this.fields.processField(this.message, item, item.tag, value);
            this.enums.processEnum(item, item.tag, value);

            if(item.tag === 9) {
                this.message.validateBodyLength(value);
            } else if(item.tag === 10) {
                this.message.validateChecksum(value);
            }

            this.message.data[i] = item;
        }

        return this.message;
    }
}

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParser;
