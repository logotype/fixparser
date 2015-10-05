import {fields} from './../spec/SpecFields';
import {Messages} from './../messages/Messages';
import {Categories} from './categories/Categories';
import {DataTypes} from './datatypes/Datatypes';

export class Fields {
    constructor() {
        this.messages = new Messages();
        this.categories = new Categories();
        this.fields = fields;
        this.dataTypes = new DataTypes();
    }

    find(tag) {
        return this.fields.find(spec => spec.Tag === String(tag));
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