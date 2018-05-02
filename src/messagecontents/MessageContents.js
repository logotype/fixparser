import { MESSAGE_CONTENTS } from './../spec/SpecMessageContents';
import { groupBy } from './../util/util';

export class MessageContents {
    constructor() {
        this.messageContents = MESSAGE_CONTENTS;
        this.cacheMap = new Map();
        this.messageContentsById = groupBy(this.messageContents, 'ComponentID');
        this.messageContents.forEach((messageContent) => {
            const componentsById = this.messageContentsById[messageContent.ComponentID];
            this.cacheMap.set(messageContent.ComponentID, componentsById.map((component) => ({
                componentID: component.ComponentID,
                tagText: component.TagText,
                indent: component.Indent,
                position: component.Position,
                reqd: component.Reqd,
                description: component.Description,
                added: component.Added,
                addedEP: component.AddedEP,
                deprecated: component.Deprecated
            })));
        });
    }

    processMessageContents(message, componentId) {
        const messageContents = this.cacheMap.get(componentId);
        if(messageContents) {
            message.setMessageContents(messageContents);
        }
    }
}
