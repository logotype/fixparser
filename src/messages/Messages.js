import {messages} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.messages = messages;
        this.cacheMap = new Map();
        this.messages.map(item => {
            this.cacheMap.set(item.MsgType, item);
        });
    }

    process(message, item, tag, value) {
        let messageType = this.cacheMap.get(String(value));
        if(messageType) {
            message.description = messageType.Name;
            item.message = messageType;
        }
    }
}