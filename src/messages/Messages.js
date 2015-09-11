import {SpecMessages} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.specMessages = new SpecMessages();
        this.messages = this.specMessages.messages;
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