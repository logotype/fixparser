import { ENUMS } from './../spec/SpecEnums';
import { EnumType } from './EnumType';

export class Enums {
    constructor() {
        this.enums = ENUMS;
        this.cacheMap = new Map();
        this.enums.forEach((enumType) => {
            this.cacheMap.set( `${enumType.Tag}|${enumType.Value}`, enumType);
        });
        this.enumType = null;
    }

    processEnum(field) {
        this.enumType = new EnumType();
        const enumType = this.cacheMap.get(`${field.tag}|${field.value}`);
        if(enumType) {
            this.enumType.setEnumeration(enumType);
            field.setEnumeration(this.enumType);
        }
    }
}
