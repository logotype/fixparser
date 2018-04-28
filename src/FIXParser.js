/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { Socket } from 'net';
import { EventEmitter } from 'events';

import FIXParserBase from './FIXParserBase';
import FrameDecoder from './util/FrameDecoder';
import { Message } from './message/Message';
import Field, * as Fields from './../src/fields/Field';
import { timestamp } from './util/util';

export * from './../src/fields/Field';

export default class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.fixParserBase = new FIXParserBase();
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
                new Field(Fields.MsgType, 0),
                new Field(Fields.MsgSeqNum, this.getNextTargetMsgSeqNum()),
                new Field(Fields.SenderCompID, this.sender),
                new Field(Fields.SendingTime, this.getTimestamp()),
                new Field(Fields.TargetCompID, this.target),
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
            .pipe(new FrameDecoder())
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
        return timestamp(dateObject);
    }

    createMessage(...fields) {
        return new Message(...fields);
    }

    parse(data) {
        return this.fixParserBase.parse(data);
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

export { Field };

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParser;
