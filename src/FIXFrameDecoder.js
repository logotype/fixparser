import { Transform } from 'stream';

export default class FIXFrameDecoder extends Transform {
    constructor(opts) {
        super(opts);
        this.data = '';
    }

    _transform(chunk, encoding, callback) {
        const chunks = (this.data + chunk).split(/(8=.+?\x0110=\d\d\d\x01)/g);
        for (let i = 0; i < chunks.length - 1; i++) {
            this.push(chunks[i]);
        }
        this.data = chunks[chunks.length - 1];
        callback();
    }

    destroy(error) { // eslint-disable-line no-unused-vars
        this.data = null;
    }
}
