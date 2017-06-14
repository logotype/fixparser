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

        let separator = '';

        if(data.charCodeAt(9) === 1) {
            // SOH separator
            this.processedData = this.message.string = data;
            return;
        } else if(data.substr(9, 3) === '^A ') {
            // Multi-character separator
            separator = /\^A |\^A/g;
        } else {
            // Determine separator
            const escapedSeparatorCharacter = String.fromCharCode(data.charCodeAt(9)).replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '\\$&'); // eslint-disable-line no-useless-escape
            separator = new RegExp(escapedSeparatorCharacter, 'g');
        }

        this.processedData = data.replace(separator, '\x01');
        this.message.string = this.processedData;
    }

    parse(data) {

        let value = null, i = 0, equalsOperator = '', item = {};

        if(!data) {
            throw new Error('No message specified!');
        }

        this.preProcess(data);

        const array = this.processedData.split('\x01');

        for (i; i < array.length - 1; i++) {

            item = {};

            equalsOperator = array[i].indexOf('=');

            item.tag = parseInt(array[i].substring(0, equalsOperator), 10);
            value = array[i].substring(equalsOperator + 1);

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
