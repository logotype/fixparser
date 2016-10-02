import {FIELDS} from './../spec/SpecFields';
import {Messages} from './../messages/Messages';
import {Categories} from './categories/Categories';
import {DataTypes} from './datatypes/Datatypes';

export class Fields {
    constructor() {
        this.fields = FIELDS;
        this.cacheMap = new Map();
        this.fields.forEach((item) => {
            this.cacheMap.set(parseInt(item.Tag, 10), item);
        });
        this.messages = new Messages();
        this.categories = new Categories();
        this.dataTypes = new DataTypes();
    }

    processField(message, item, tag, value) {
        const data = this.cacheMap.get(tag);
        if(data) {

            if(tag === 35) {
                this.messages.processMessage(message, item, value);
            }

            item.name = data.Name;
            item.description = data.Description;

            if(data.BaseCategory) {
                this.categories.processCategory(item, data.BaseCategory);
            }

            this.dataTypes.processDatatype(item, data.Type, value);
        } else {
            item.type = '';
            item.value = String(value);
        }
    }
}