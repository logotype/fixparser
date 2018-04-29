import { MESSAGE_CONTENTS } from './../spec/SpecMessageContents';

export class MessageContents {
    constructor() {
        this.messageContents = MESSAGE_CONTENTS;
        this.cacheMap = new Map();
        this.messageContents.forEach((messageContent) => {
            this.cacheMap.set(messageContent.ComponentID, messageContent);
        });
    }

    findAll(componentId) {
        return this.messageContents
            .filter((content) => content.ComponentID === componentId)
            .map((content) => ({
                componentID: content.ComponentID,
                tagText: content.TagText,
                indent: content.Indent,
                position: content.Position,
                reqd: content.Reqd,
                description: content.Description,
                added: content.Added
            }));
    }
}
