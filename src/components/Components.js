import { COMPONENTS } from './../spec/SpecComponents';

export class Components {
    constructor() {
        this.components = COMPONENTS;
        this.cacheMap = new Map();
        this.components.forEach((component) => {
            this.cacheMap.set(component.ComponentID, component);
        });
    }

    find(componentId) {
        return this.cacheMap.get(String(componentId));
    }
}
