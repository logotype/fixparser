/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import Field from './fields/Field';
import { Fields as FieldsCache } from './fields/Fields';
import { Enums as EnumsCache } from './enums/Enums';
import { Message } from './message/Message';
import { SOH, RE_PIPE, STRING_A, RE_A, RE_ESCAPE, RE_FIXT, STRING_EQUALS } from './util/util';

export * from './../src/fields/Field';

export default class FIXParserBase {

    constructor() {
        this.message = new Message();
        this.re = RE_FIXT;
        this.processedData = '';
        this.fields = new FieldsCache();
        this.enums = new EnumsCache();
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
}
