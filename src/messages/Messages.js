import {SpecMessages} from './../spec/SpecMessages';

export class Messages {
    constructor() {
        this.specMessages = new SpecMessages();
        this.messages = this.specMessages.messages;
    }

    find(value) {
        return this.messages.find(item => item.MsgType === String(value));
    }

    binaryFind(value) {
        let min = 0,
            max = this.messages.length - 1,
            guess,
            returnValue = -1;

        while (min <= max) {
            guess = Math.floor((min + max) / 2);

            if (this.messages[guess].MsgType === value) {
                returnValue = guess;
                break;
            } else {
                if (this.messages[guess].MsgType < value) {
                    min = guess + 1;
                }
                else {
                    max = guess - 1;
                }
            }
        }

        return returnValue;
    }

    process(message, item, tag, value) {
        let messageType = this.find(value);
        if(messageType) {
            message.description = messageType.Name;
            item.message = messageType;
        }
    }
}