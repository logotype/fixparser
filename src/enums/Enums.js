import {enums} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.enums = enums;
        this.cacheMap = new Map();
        this.enums.map(item => {
            this.cacheMap.set( item.Tag + '|' + item.Value , item);
        });
    }

    processEnum(item, tag, value) {
        let enumType = this.cacheMap.get(String(tag) + '|' + value);
        if(enumType) {
            item.enumeration = enumType;
        }
    }
}