import {SpecFields} from './../spec/SpecFields';
import {Messages} from './../messages/Messages';
import {Categories} from './categories/Categories';
import {DataTypes} from './datatypes/Datatypes';

export class Fields {
    constructor() {
        this.specFields = new SpecFields();
        this.messages = new Messages();
        this.categories = new Categories();
        this.fields = this.specFields.fields;
        this.dataTypes = new DataTypes();
    }

    find(tag) {
        return this.fields.find(spec => spec.Tag === String(tag));
    }

    process(message, item, tag, value) {
        let data = this.find(tag);
        if(data) {

            if(tag === 35) {
                let messageData = this.messages.find(value);
                if(messageData) {
                    message.description = messageData.Name;
                }
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