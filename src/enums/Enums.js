import {ENUMS} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.enums = ENUMS;
        this.cacheMap = new Map();
        this.enums.forEach((item) => {
            this.cacheMap.set( `${item.Tag}|${item.Value}`, item);
        });
    }

    processEnum(item, tag, value) {
        const enumType = this.cacheMap.get(`${tag}|${value}`);
        if(enumType) {
            item.enumeration = enumType;
        }
    }
}