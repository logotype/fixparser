/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2018 Victor Norgren
 * Released under the MIT license
 */
import { EventEmitter } from 'events';

import { timestamp } from './util/util';
import FIXParserBase from './FIXParserBase';
import Message from './message/Message';
import Field from './../src/fields/Field';
import * as Messages from './../src/constants/ConstantsMessage';
import * as Fields from './../src/constants/ConstantsField';
import * as Side from './../src/constants/ConstantsSide';
import * as OrderTypes from './../src/constants/ConstantsOrderTypes';
import * as HandlInst from './../src/constants/ConstantsHandlInst';
import * as TimeInForce from './../src/constants/ConstantsTimeInForce';
import * as EncryptMethod from './../src/constants/ConstantsEncryptMethod';

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
export { Fields };
export { Message };
export { Messages };
export { Side };
export { OrderTypes };
export { HandlInst };
export { TimeInForce };
export { EncryptMethod };

/**
 * Export global to the window object.
 */
global.FIXParser = FIXParserBrowser;
