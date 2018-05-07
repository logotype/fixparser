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
import Message from './message/Message';
import { SOH, RE_PIPE, STRING_A1, STRING_A2, STRING_PIPE, RE_A, RE_FIND, RE_ESCAPE, RE_FIXT, STRING_EQUALS } from './util/util';

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
        const firstSeparator = match && match.length === 2 ? match[1] : null;

        if(firstSeparator === SOH) {
            // SOH separator
            this.message.setString(this.messageString);
            this.messageTags = this.messageString.split(SOH);
        } else if(firstSeparator === STRING_PIPE) {
            // | separator
            const stringData = this.messageString.replace(RE_PIPE, SOH);
            this.message.setString(stringData);
            this.messageTags = stringData.split(SOH);
        } else if(firstSeparator === STRING_A1 || firstSeparator === STRING_A2) {
            // Multi-character separator
            const stringData = this.messageString.replace(RE_A, SOH);
            this.message.setString(stringData);
            this.messageTags = stringData.split(SOH);
        } else {
            // Try to determine single-byte separator (slowest)
            const matches = RE_FIND.exec(this.messageString);
            if(matches && matches.length === 2) {
                const stringData = this.messageString.replace(new RegExp(matches[1].replace(RE_ESCAPE, '\\$&'), 'g'), SOH);
                this.message.setString(stringData);
                this.messageTags = stringData.split(SOH);
            } else {
                this.message = null;
                this.messageTags = [];
            }
        }
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
            if(this.message) {
                this.processFields();
                messages.push(this.message);
            }
        }

        return messages;
    }
}
