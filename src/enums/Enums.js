import {enums} from './../spec/SpecEnums';

export class Enums {
    constructor() {
        this.enums = enums;
        this.enumsMap = new Map();
        this.enums.map((enumObj) => {
            this.enumsMap.set( enumObj.Tag + '|' + enumObj.Value , enumObj);
        });
    }

    find(tag, value) {
        let returnValue = null;
        if(this.enumsMap.has(tag + '|' + value)) {
            returnValue = this.enumsMap.get(tag + '|' + value);
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