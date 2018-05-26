import { COMPONENTS } from './../spec/SpecComponents';

export class Components {
    constructor() {
        this.components = COMPONENTS;
        this.cacheMap = new Map();
        this.cacheMapByName = new Map();
        this.components.forEach((component) => {
            this.cacheMap.set(component.ComponentID, component);
        });
        this.components.forEach((component) => {
            this.cacheMapByName.set(component.Name, component);
        });
    }

    find(componentId) {
        return this.cacheMap.get(String(componentId));
    }

    findByName(name) {
        return this.cacheMapByName.get(String(name));
    }
}
