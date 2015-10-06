import {fields} from './../spec/SpecFields';
import {Messages} from './../messages/Messages';
import {Categories} from './categories/Categories';
import {DataTypes} from './datatypes/Datatypes';

export class Fields {
    constructor() {
        this.fields = fields;
        this.cacheMap = new Map();
        this.fields.map(item => {
            this.cacheMap.set(item.Tag, item);
        });
        this.messages = new Messages();
        this.categories = new Categories();
        this.dataTypes = new DataTypes();
    }

    find(tag) {
        let returnValue = null;
        if(this.cacheMap.has(String(tag))) {
            returnValue = this.cacheMap.get(String(tag));
        }
        return returnValue;
    }

    process(message, item, tag, value) {
        let data = this.find(tag);
        if(data) {

            if(tag === 35) {
                this.messages.process(message, item, tag, value);
            }

            item.name = data.Name;
            item.description = data.Description;

            if(data.hasOwnProperty('BaseCategory')) {
                this.categories.process(item, data.BaseCategory);
            }

            this.dataTypes.process(item, data.Type, value);
        } else {
            item.type = '';
            item.value = String(value);
        }
    }
}