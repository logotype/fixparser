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
        this.message = null;
        this.messageTags = [];
        this.messageString = '';
        this.reBeginString = new RegExp(/(?=8=FIX)/g);
        this.re = RE_FIXT;
        this.fields = new FieldsCache();
        this.enums = new EnumsCache();
    }

    processMessage() {
        const match = this.re.exec(this.messageString);
        const firstSeparator = match && match.length === 2 ? match[1] : SOH;
        let separator = null;

        if(firstSeparator === SOH) {
            // SOH separator
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

        const stringData = this.messageString.replace(separator, SOH);
        this.message.setString(stringData);
        this.messageTags = stringData.split(SOH);
    }

    processFields() {
        let tag = null, value = null, i = 0, equalsOperator = '', field = null;

        for (i; i < this.messageTags.length - 1; i++) {

            equalsOperator = this.messageTags[i].indexOf(STRING_EQUALS);

            tag = this.messageTags[i].substring(0, equalsOperator);
            value = this.messageTags[i].substring(equalsOperator + 1);

            field = new Field(tag, value);

            this.fields.processField(this.message, field);
            this.enums.processEnum(field);

            if(field.tag === 9) {
                this.message.validateBodyLength(value);
            } else if(field.tag === 10) {
                this.message.validateChecksum(value);
            }

            this.message.addField(field);
        }
    }

    parse(data) {
        let i = 0;

        const messageStrings = data ? data.split(this.reBeginString) : [];
        const messages = [];

        for(i; i < messageStrings.length; i++) {
            this.message = new Message();
            this.messageString = messageStrings[i];
            this.processMessage();
            this.processFields();
            messages.push(this.message);
        }

        return messages;
    }
}
