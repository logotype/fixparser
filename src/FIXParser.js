/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { Socket } from 'net';
import { EventEmitter } from 'events';

import FIXFrameDecoder from './FIXFrameDecoder';
import { Fields as FieldsCache } from './fields/Fields';
import { Enums as EnumsCache } from './enums/Enums';
import { Message } from './message/Message';
import { Field as FieldClass } from './fields/Field';

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

export default class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.processedData = '';
        this.message = new Message();
        this.fields = new FieldsCache();
        this.enums = new EnumsCache();
        this.socket = null;
        this.host = null;
        this.port = null;
        this.sender = null;
        this.target = null;
        this.messageSequence = 1;
        this.heartBeatInterval = null;
        this.heartBeatIntervalId = null;
    }

    stopHeartbeat() {
        clearInterval(this.heartBeatIntervalId);
    }

    startHeartbeat() {
        this.stopHeartbeat();
        this.heartBeatIntervalId = setInterval(() => {
            const heartBeat = this.createMessage(
                new FieldClass(FieldClass.MsgType, 0),
                new FieldClass(FieldClass.MsgSeqNum, this.getNextTargetMsgSeqNum()),
                new FieldClass(FieldClass.SenderCompID, this.sender),
                new FieldClass(FieldClass.SendingTime, this.getTimestamp()),
                new FieldClass(FieldClass.TargetCompID, this.target),
            );
            this.send(heartBeat);

        }, this.heartBeatInterval);
    }

    connect(host = 'localhost', port = '9878', sender = 'SENDER', target = 'TARGET', heartbeatIntervalMs = 60000) {
        this.host = host;
        this.port = port;
        this.sender = sender;
        this.target = target;
        this.heartBeatInterval = heartbeatIntervalMs;
        this.socket = new Socket();
        this.socket.setEncoding('ascii');

        this.socket
            .pipe(new FIXFrameDecoder())
            .on('data', (data) => {
                const message = this.parse(data.toString());
                this.emit('message', message);
            });

        this.socket.on('close', () => {
            this.emit('close');
            this.stopHeartbeat();
        });

        this.socket.connect(this.port, this.host, () => {
            console.log('Connected', this.socket.readyState);
            if(this.socket.readyState === 'open') {
                this.emit('open');
                this.startHeartbeat();
            }
        });
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
            throw new Error('Invalid specified!');
        }
        const date = adjustForTimezone(dateObject);
        return `${date.getFullYear()}${Message.pad(date.getMonth() + 1, 2)}${Message.pad(date.getDate(), 2)}-${Message.pad(date.getHours(), 2)}:${Message.pad(date.getMinutes(), 2)}:${Message.pad(date.getSeconds(), 2)}.${Message.pad(date.getMilliseconds(), 3)}`;
    }

    preProcess(data) {
        this.message.reset();

        // should not throw an error if attempting to parse invalid FIX
        const match = new RegExp('^8=FIXT?.\\d.\\d([^\\d]+)\\d.*', 'i').exec(data);
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
            throw new Error('No message specified!');
        }

        this.preProcess(data);

        for (i; i < this.processedData.length - 1; i++) {

            equalsOperator = this.processedData[i].indexOf(STRING_EQUALS);

            tag = parseInt(this.processedData[i].substring(0, equalsOperator), 10);
            value = this.processedData[i].substring(equalsOperator + 1);

            item = new FieldClass(tag, value);

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

    send(message) {
        if(this.socket.readyState === 'open') {
            if(message instanceof Message) {
                this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
                this.socket.write(message.encode());
            } else {
                console.error('FIXParser: could not send message, message of wrong type');
            }
        } else {
            console.error('FIXParser: could not send message, socket not open', message);
        }
    }
}

export const Field = FieldClass;

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParser;
