import {MESSAGES} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.messages = MESSAGES;
        this.cacheMap = new Map();
        this.messages.forEach((item) => {
            this.cacheMap.set(item.MsgType, item);
        });
    }

    processMessage(message, item) {
        const messageType = this.cacheMap.get(item.value);
        if(messageType) {
            message.description = messageType.Name;
            message.messageType = messageType.MsgType;
            item.message = messageType;
        }
    }
}
