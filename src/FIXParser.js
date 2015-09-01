/*
 * fixparser
 * https://github.com/logotype/fixparser.git
 *
 * Copyright 2015 Victor Norgren
 * Released under the MIT license
 */
import 'babel/polyfill';
import {Parser} from './Parser';
import {Tags} from './Tags';
import {EventEmitter} from 'events';

export class FIXParser extends EventEmitter {

    constructor() {
        super();
        this.tags = new Tags();
        this.parser = new Parser(this.tags);
    }

    parse(message) {
        return this.parser.parse(message);
    }
}

export default FIXParser;

/**
 * Browserify exports global to the window object.
 * @namespace Myo
 */
global.FIXParser = FIXParser;