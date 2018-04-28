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
import { Message } from './message/Message';
import Field from './../src/fields/Field';

export * from './../src/fields/Field';

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
                    const message = this.fixParser.parse(data.toString());
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
        console.log(`FIXServer started at ${this.host}:${this.port}`);
    }

    processMessage(message) {
        console.log(`FIXServer received message [${Date.now()}]: ${message.description}`);
    }

    getNextTargetMsgSeqNum() {
        return this.messageSequence;
    }

    setNextTargetMsgSeqNum(nextMsgSeqNum) {
        this.messageSequence = nextMsgSeqNum;
        return this.messageSequence;
    }

    send(message) {
        if(this.socket.readyState === 'open') {
            if(message instanceof Message) {
                this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
                this.socket.write(message.encode());
            } else {
                console.error('FIXServer: could not send message, message of wrong type');
            }
        } else {
            console.error('FIXServer: could not send message, socket not open', message);
        }
    }
}

export { Field };
