import {SpecDatatypes} from './../spec/SpecDatatypes';

export class DataTypes {
    constructor() {
        this.specDatatypes = new SpecDatatypes();
        this.dataTypes = this.specDatatypes.datatypes;
    }

    find(dataType) {
        return this.dataTypes.find(spec => spec.Name === dataType);
    }

    process(item, tag, value) {

        let dataType = this.find(item.type);
        if(dataType) {
            item.typeDetail = dataType;
        }

        switch(item.type) {
            case 'int':
            case 'Length':
            case 'TagNum':
            case 'SeqNum':
            case 'NumInGroup':
            case 'DayOfMonth':
                item.value = parseInt(value);
                break;
            case 'float':
            case 'Qty':
            case 'Price':
            case 'PriceOffset':
            case 'Amt':
            case 'Percentage':
                item.value = parseFloat(value);
                break;
            case 'char':
            case 'Boolean':
                item.value = String(value);
                break;
            case 'String':
            case 'MultipleCharValue':
            case 'MultipleStringValue':
            case 'Country':
            case 'Currency':
            case 'Exchange':
            case 'MonthYear':
            case 'UTCTimestamp':
            case 'UTCTimeOnly':
            case 'UTCDateOnly':
            case 'LocalMktDate':
            case 'TZTimeOnly':
            case 'TZTimestamp':
            case 'data':
            case 'XMLData':
            case 'Language':
                item.value = String(value);
                break;
            case 'Pattern':
            case 'Tenor':
            case 'Reserved100Plus':
            case 'Reserved1000Plus':
            case 'Reserved4000Plus':
                item.value = String(value);
                break;
            default:
                item.value = String(value);
                break;
        }
    }
}