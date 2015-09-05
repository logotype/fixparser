/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import 'babel/polyfill';
import {Parser} from './parser/Parser';
import {EventEmitter} from 'events';

export class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.parser = new Parser();
    }

    parse(message) {
        return this.parser.parse(message);
    }

    calculateChecksum(message) {
        return this.parser.calculateChecksum(message);
    }
}

export default FIXParser;

/**
 * Browserify exports global to the window object.
 */
/*eslint-disable */
global.FIXParser = FIXParser;
/*eslint-enable */