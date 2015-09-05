import {SpecFields} from './../spec/SpecFields';
import {Categories} from './categories/Categories';
import {DataTypes} from './datatypes/Datatypes';

export class Fields {
    constructor() {
        this.specFields = new SpecFields();
        this.categories = new Categories();
        this.fields = this.specFields.fields;
        this.dataTypes = new DataTypes();
    }

    find(tag) {
        return this.fields.find(spec => spec.Tag === String(tag));
    }

    process(item, tag, value) {
        let data = this.find(tag);
        if(data) {
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