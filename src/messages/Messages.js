import {MESSAGES} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.messages = MESSAGES;
        this.cacheMap = new Map();
        this.messages.map((item) => {
            this.cacheMap.set(item.MsgType, item);
        });
    }

    processMessage(message, item, value) {
        const messageType = this.cacheMap.get(value);
        if(messageType) {
            message.description = messageType.Name;
            item.message = messageType;
        }
    }
}