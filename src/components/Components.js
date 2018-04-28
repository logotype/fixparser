import { COMPONENTS } from './../spec/SpecComponents';

export class Components {
    constructor() {
        this.components = COMPONENTS;
        this.cacheMap = new Map();
        this.components.forEach((item) => {
            this.cacheMap.set(item.Name, item);
        });
    }

    find(componentName) {
        return this.cacheMap.get(String(componentName));
    }
}
