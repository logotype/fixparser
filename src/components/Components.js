import {components} from './../../spec/SpecCategories';

export class Components {
    constructor() {
        this.components = components;
    }

    find(componentName) {
        return this.components.find(item => item.Name === componentName);
    }
}