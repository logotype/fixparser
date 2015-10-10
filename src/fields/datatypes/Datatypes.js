import {datatypes} from './../../spec/SpecDatatypes';

export class DataTypes {
    constructor() {
        this.dataTypes = datatypes;
        this.cacheMap = new Map();
        this.dataTypes.map(item => {
            this.cacheMap.set(item.Name, item);
        });
        this.cacheTypeMap = new Map();

        this.cacheTypeMap.set('int', parseInt);
        this.cacheTypeMap.set('Length', parseInt);
        this.cacheTypeMap.set('TagNum', parseInt);
        this.cacheTypeMap.set('SeqNum', parseInt);
        this.cacheTypeMap.set('NumInGroup', parseInt);
        this.cacheTypeMap.set('DayOfMonth', parseInt);

        this.cacheTypeMap.set('float', parseFloat);
        this.cacheTypeMap.set('Qty', parseFloat);
        this.cacheTypeMap.set('Price', parseFloat);
        this.cacheTypeMap.set('PriceOffset', parseFloat);
        this.cacheTypeMap.set('Amt', parseFloat);
        this.cacheTypeMap.set('Percentage', parseFloat);

        this.cacheTypeMap.set('char', String);
        this.cacheTypeMap.set('Boolean', String);

        this.cacheTypeMap.set('String', String);
        this.cacheTypeMap.set('MultipleCharValue', String);
        this.cacheTypeMap.set('MultipleStringValue', String);
        this.cacheTypeMap.set('Country', String);
        this.cacheTypeMap.set('Currency', String);
        this.cacheTypeMap.set('Exchange', String);
        this.cacheTypeMap.set('MonthYear', String);
        this.cacheTypeMap.set('UTCTimestamp', String);
        this.cacheTypeMap.set('UTCTimeOnly', String);
        this.cacheTypeMap.set('UTCDateOnly', String);
        this.cacheTypeMap.set('LocalMktDate', String);
        this.cacheTypeMap.set('TZTimeOnly', String);
        this.cacheTypeMap.set('TZTimestamp', String);
        this.cacheTypeMap.set('data', String);
        this.cacheTypeMap.set('XMLData', String);
        this.cacheTypeMap.set('Language', String);

        this.cacheTypeMap.set('Pattern', String);
        this.cacheTypeMap.set('Tenor', String);
        this.cacheTypeMap.set('Reserved100Plus', String);
        this.cacheTypeMap.set('Reserved1000Plus', String);
        this.cacheTypeMap.set('Reserved4000Plus', String);
    }

    processDatatype(item, type, value) {
        let dataType = this.cacheMap.get(type);
        if(dataType) {
            item.type = dataType;
            if(type === 'int' ||
                type === 'Length' ||
                type === 'TagNum' ||
                type === 'SeqNum' ||
                type === 'NumInGroup' ||
                type === 'DayOfMonth') {
                item.value = parseInt(value);
            } else if(type === 'float' ||
                type === 'Qty' ||
                type === 'Price' ||
                type === 'PriceOffset' ||
                type === 'Amt' ||
                type === 'Percentage') {
                item.value = parseFloat(value);
            } else {
                item.value = value;
            }
        }
    }
}