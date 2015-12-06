/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import {Fields} from './fields/Fields';
import {Enums} from './enums/Enums';
import {Message} from './message/Message';
import {EventEmitter} from 'events';

export class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.processedData = '';
        this.message = new Message();
        this.fields = new Fields();
        this.enums = new Enums();
    }

    preProcess(data) {
        this.message.reset();
        this.processedData = data.replace(/\^A |\^|\|/g, '\x01');
        this.message.string = this.processedData;
    }

    parse(data) {

        let value = null, array = [], i = 0, equalsOperator = '', item = {};

        if(!data) {
            throw new Error('No message specified!');
        }

        this.preProcess(data);

        array = this.processedData.split('\x01');

        for (i; i < array.length - 1; i++) {

            item = {};

            equalsOperator = array[i].indexOf('=');

            item.tag = parseInt(array[i].substring(0, equalsOperator));
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

export default FIXParser;

/**
 * Browserify exports global to the window object.
 */
/*eslint-disable */
global.FIXParser = FIXParser;
/*eslint-enable */