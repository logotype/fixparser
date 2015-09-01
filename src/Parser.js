/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
export class Parser {

    constructor(tags) {
        this.message = [];
        this.tags = tags;
    }

    parse(message) {

        var startOfHeader, tag, value, array, arrayLength, lastByte, i = 0,
        equalsOperator, item;

        if(message === undefined) {
            throw new Error('No message specified!');
        }

        this.message = [];

        // Strip whitespaces
        message = message.replace(/ /g, '');

        // Weird SOH (NySE only?? should be 1 byte!)
        message = message.replace(/\^A/g, '|');

        startOfHeader = message.charAt(9);
        array = message.split(startOfHeader);

        lastByte = message.charAt(message.length - 1) === startOfHeader ? 1 : 0;
        arrayLength = array.length - lastByte;

        for (i; i < arrayLength; i++) {

            item = {};

            equalsOperator = array[i].indexOf('=');

            if (equalsOperator === -1) {
                item.error = 'Error: ' + array[i];
                continue;
            }

            tag = parseInt(array[i].substring(0, equalsOperator));
            value = array[i].substring(equalsOperator + 1);

            let tagData = this.tags.getTagData(tag);
            let messageType;
            let execType;

            if(tagData) {
                item.field = tagData.field;
                item.description = tagData.description;
                item.datatype = tagData.datatype;
            } else {
                item.datatype = '';
            }

            if(tag === 35 || tag === 372) {
                messageType = this.tags.getMessageType(value);
                if(messageType) {
                    item.messageType = messageType.description;
                }
            }

            if(tag === 150) {
                execType = this.tags.getExecType(value);
                if(execType) {
                    item.execType = execType.description;
                }
            }

            switch(item.datatype) {
                case 'int':
                case 'Length':
                case 'TagNum':
                case 'SeqNum':
                case 'NumInGroup':
                case 'DayOfMonth':
                    item.value = parseInt(value);
                    break;
                case 'float':
                case 'Qty':
                case 'Price':
                case 'PriceOffset':
                case 'Amt':
                case 'Percentage':
                    item.value = parseFloat(value);
                    break;
                case 'char':
                case 'Boolean':
                    item.value = String(value);
                    break;
                case 'String':
                case 'MultipleCharValue':
                case 'MultipleStringValue':
                case 'Country':
                case 'Currency':
                case 'Exchange':
                case 'MonthYear':
                case 'UTCTimestamp':
                case 'UTCTimeOnly':
                case 'UTCDateOnly':
                case 'LocalMktDate':
                case 'TZTimeOnly':
                case 'TZTimestamp':
                case 'data':
                case 'XMLData':
                case 'Language':
                    item.value = String(value);
                    break;
                case 'Pattern':
                case 'Tenor':
                case 'Reserved100Plus':
                case 'Reserved1000Plus':
                case 'Reserved4000Plus':
                    item.value = String(value);
                    break;
                default:
                    item.value = String(value);
                    break;
            }

            item.tag = tag;

            this.message.push(item);
        }

        return this.message;
    }
}