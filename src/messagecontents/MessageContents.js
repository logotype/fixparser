import prebuiltMap from './../../prebuild/built/MessageContents.prebuilt';

export class MessageContents {
    constructor() {
        this.components = prebuiltMap.components;
        this.messageContents = prebuiltMap.messageContents;
        this.messageContentsById = prebuiltMap.messageContentsById;
        this.cacheMap = new Map();
        Object.entries(prebuiltMap.mappedComponents)
            .forEach((key, component) => this.cacheMap.set(key, component));
    }

    processMessageContents(message, componentId) {
        const messageContents = this.cacheMap.get(componentId);
        if(messageContents) {
            message.setMessageContents(messageContents);
        }
    }
}
