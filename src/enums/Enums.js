import {SpecEnums} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.specEnums = new SpecEnums();
        this.enums = this.specEnums.enums;
    }

    find(tag, value) {
        return this.enums.find(item => item.Tag === String(tag) && item.Value === String(value));
    }

    process(item, tag, value) {
        let enumType = this.find(tag, value);
        if(enumType) {
            item.enum = enumType;
        }
    }
}