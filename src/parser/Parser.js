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

        this.message = [];

        // Strip whitespaces
        data = data.replace(/ /g, '');

        // Weird SOH (NySE only?? should be 1 byte!)
        data = data.replace(/\^A/g, '|');

        startOfHeader = data.charAt(9);
        array = data.split(startOfHeader);

        lastByte = data.charAt(data.length - 1) === startOfHeader ? 1 : 0;
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

            item.tag = tag;

            this.message[i] = item;
        }

        return this.message;
    }
}