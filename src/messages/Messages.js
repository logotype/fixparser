import { MESSAGES } from './../spec/SpecMessages';
import { MessageContents } from './../messagecontents/MessageContents';

export class Messages {
    constructor() {
        this.messages = MESSAGES;
        this.components = new MessageContents();
        this.cacheMap = new Map();
        this.messages.forEach((message) => {
            this.cacheMap.set(message.MsgType, message);
        });
    }

    processMessage(message, field) {
        const messageType = this.cacheMap.get(field.value);
        if(messageType) {
            message.setDescription(messageType.Name);
            message.setMessageType(messageType.MsgType);

            const messageContents = this.components.findAll(messageType.ComponentID);
            if(messageContents.length > 0) {
                message.setMessageContent(messageContents);
            }
        }
    }
}
