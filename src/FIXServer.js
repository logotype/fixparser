/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { createServer } from 'net';
import { EventEmitter } from 'events';

import FIXParser from './FIXParser';
import FrameDecoder from './util/FrameDecoder';
import Message from './message/Message';
import Field from './../src/fields/Field';
import * as Messages from './../src/constants/ConstantsMessage';
import * as Fields from './../src/constants/ConstantsField';
import * as Side from './../src/constants/ConstantsSide';
import * as OrderTypes from './../src/constants/ConstantsOrderTypes';
import * as HandlInst from './../src/constants/ConstantsHandlInst';
import * as TimeInForce from './../src/constants/ConstantsTimeInForce';
import * as EncryptMethod from './../src/constants/ConstantsEncryptMethod';

export default class FIXServer extends EventEmitter {

    constructor() {
        super();
        this.fixParser = new FIXParser();
        this.host = null;
        this.port = null;
        this.server = null;
        this.socket = null;
        this.sender = null;
        this.target = null;
        this.messageSequence = 1;
        this.heartBeatInterval = null;
        this.heartBeatIntervalId = null;
    }

    createServer(host = 'localhost', port = '9878') {
        this.host = host;
        this.port = port;
        this.server = createServer((socket) => {
            this.socket = socket;
            this.socket
                .pipe(new FrameDecoder())
                .on('data', (data) => {
                    const message = this.fixParser.parse(data.toString())[0];
                    this.processMessage(message);
                    this.emit('message', message);
                });

            this.socket.on('open', () => {
                this.emit('open');
            });

            this.socket.on('close', () => {
                this.emit('close');
            });
        });

        this.server.listen(this.port, this.host);
        console.log(`[${Date.now()}] FIXServer started at ${this.host}:${this.port}`);
    }

    processMessage(message) {
        if(message.messageType === Messages.SequenceReset) {
            const newSeqNo = (this.getField(Fields.NewSeqNo) || {}).value;
            if(newSeqNo) {
                console.log(`[${Date.now()}] FIXServer new sequence number ${newSeqNo}`);
                this.setNextTargetMsgSeqNum(newSeqNo);
            }
        }
        console.log(`[${Date.now()}] FIXServer received message ${message.description}`);
    }

    getNextTargetMsgSeqNum() {
        return this.messageSequence;
    }

    setNextTargetMsgSeqNum(nextMsgSeqNum) {
        this.messageSequence = parseInt(nextMsgSeqNum, 10);
        return this.messageSequence;
    }

    send(message) {
        if(this.socket.readyState === 'open') {
            if(message instanceof Message) {
                this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
                this.socket.write(message.encode());
            } else {
                console.error(`[${Date.now()}] FIXServer: could not send message: message of wrong type`);
            }
        } else {
            console.error(`[${Date.now()}] FIXServer: could not send message, socket not open`);
        }
    }
}

export { Field };
export { Fields };
export { Message };
export { Messages };
export { Side };
export { OrderTypes };
export { HandlInst };
export { TimeInForce };
export { EncryptMethod };
