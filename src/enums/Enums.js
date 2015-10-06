import {enums} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.enums = enums;
        this.cacheMap = new Map();
        this.enums.map(item => {
            this.cacheMap.set( item.Tag + '|' + item.Value , item);
        });
    }

    find(tag, value) {
        let returnValue = null;
        if(this.cacheMap.has(String(tag) + '|' + value)) {
            returnValue = this.cacheMap.get(String(tag) + '|' + value);
        }
        return returnValue;
    }

    process(item, tag, value) {
        let enumType = this.find(tag, value);
        if(enumType) {
            item.enumeration = enumType;
        }
    }
}