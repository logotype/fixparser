/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { EventEmitter } from 'events';

import FIXParserBase from './FIXParserBase';
import { Message } from './message/Message';
import Field from './../src/fields/Field';
import { timestamp } from './util/util';

export * from './../src/fields/Field';

export default class FIXParserBrowser extends EventEmitter {

    constructor() {
        super();
        this.fixParserBase = new FIXParserBase();
        this.messageSequence = 1;
    }

    connect() {
        console.error('FIXParser: connect() is only available in node.js environment');
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

    send() {
        console.error('FIXParser: send() is only available in node.js environment');
    }
}

export { Field };

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParserBrowser;
