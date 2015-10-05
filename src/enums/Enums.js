import {enums} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.enums = enums;
    }

    find(tag, value) {
        return this.enums.find(item => item.Tag === String(tag) && item.Value === String(value));
    }

    process(item, tag, value) {
        let enumType = this.find(tag, value);
        if(enumType) {
            item.enumeration = enumType;
        }
    }
}