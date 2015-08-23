/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import {Parser} from './Parser';
import {EventEmitter} from 'events';

export class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.parser = new Parser();
    }

    parse(message) {
        return this.parser.parse(message);
    }
}

export default FIXParser;