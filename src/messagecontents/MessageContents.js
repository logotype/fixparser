import { MESSAGE_CONTENTS } from './../spec/SpecMessageContents';
import { groupBy } from './../util/util';
import { Components } from './../components/Components';

export class MessageContents {
    constructor() {
        this.components = new Components();
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
                deprecated: component.Deprecated,
                validated: false,
                components: this.components.findByName(component.TagText)
                    ? this.messageContents
                        .filter((content) => content.ComponentID === this.components.findByName(component.TagText).ComponentID)
                        .map((childComponent) => ({
                            componentID: childComponent.ComponentID,
                            tagText: childComponent.TagText,
                            indent: childComponent.Indent,
                            position: childComponent.Position,
                            reqd: childComponent.Reqd,
                            description: childComponent.Description,
                            added: childComponent.Added,
                            addedEP: childComponent.AddedEP,
                            deprecated: childComponent.Deprecated,
                            validated: false
                        }))
                    : []
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
