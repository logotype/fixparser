import {messages} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.messages = messages;
    }

    find(value) {
        return this.messages.find(item => item.MsgType === String(value));
    }
    
    process(message, item, tag, value) {
        let messageType = this.find(value);
        if(messageType) {
            message.description = messageType.Name;
            item.message = messageType;
        }
    }
}