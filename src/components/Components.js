import {SpecComponents} from './../spec/SpecComponents';

export class Components {
    constructor() {
        this.specComponents = new SpecComponents();
        this.components = this.specComponents.components;
    }

    find(componentName) {
        return this.components.find(item => item.Name === componentName);
    }
}