import { MESSAGE_CONTENTS } from './../spec/SpecMessageContents';
import { groupBy } from './../util/util';

export class MessageContents {
    constructor() {
        this.messageContents = MESSAGE_CONTENTS;
        this.cacheMap = new Map();
        this.messageContentsById = groupBy(this.messageContents, 'ComponentID');
        this.messageContents.forEach((messageContent) => {
            this.cacheMap.set(messageContent.ComponentID, this.messageContentsById[messageContent.ComponentID]);
        });
    }

    processMessageContents(message, componentId) {
        const messageContents = this.cacheMap.get(componentId);
        if(messageContents) {
            message.setMessageContents(messageContents);
        }
    }
}
