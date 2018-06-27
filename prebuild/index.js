import fs from 'fs';

import { MESSAGE_CONTENTS } from './../src/spec/SpecMessageContents';
import { groupBy } from './../src/util/util';
import { Components } from './../src/components/Components';

const messageContents = MESSAGE_CONTENTS;
const components = new Components();
const mappedComponents = {};
const messageContentsById = groupBy(messageContents, 'ComponentID');

console.log('Building message content cache map...');
messageContents.forEach((messageContent) => {
    const componentsById = messageContentsById[messageContent.ComponentID];
    mappedComponents[messageContent.ComponentID] = componentsById.map((component) => ({
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
        components: components.findByName(component.TagText)
            ? messageContents
                .filter((content) => content.ComponentID === components.findByName(component.TagText).ComponentID)
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
    }));
});

const outputPath = 'prebuild/built/';
const outputFilename = `${outputPath}MessageContents.prebuilt.js`;
console.log(`Built message content cache map, writing to ${outputFilename}.`);

let err = null;
if (!fs.existsSync(outputPath)) {
    err = fs.mkdirSync(outputPath);
    if (err) {
        console.error(err);
        process.exit(1);
    }
}

if (fs.existsSync(outputFilename)) {
    fs.unlinkSync(outputFilename);
}

err = fs.writeFileSync(
    outputFilename,
    `export default ${JSON.stringify({
        messageContents: messageContents,
        components: components,
        mappedComponents: mappedComponents,
        messageContentsById: messageContentsById
    }, null, 4)};`,
    'utf8'
);

if (err) {
    console.error(err);
    process.exit(2);
}

console.log('Done');
