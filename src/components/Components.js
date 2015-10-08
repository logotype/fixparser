import {components} from './../../spec/SpecCategories';

export class Components {
    constructor() {
        this.components = components;
        this.cacheMap = new Map();
        this.components.map(item => {
            this.cacheMap.set(item.Name, item);
        });
    }

    find(componentName) {
        return this.cacheMap.get(String(componentName));
    }
}