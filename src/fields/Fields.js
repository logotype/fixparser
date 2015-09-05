import {SpecFields} from './../spec/SpecFields';

export class Fields {
    constructor() {
        this.specFields = new SpecFields();
        this.fields = this.specFields.fields;
    }

    find(tag) {
        return this.fields.find(spec => spec.Tag === String(tag));
    }

    process(item, tag, value) {
        let data = this.find(tag);
        if(data) {
            item.name = data.Name;
            item.description = data.Description;
            item.type = data.Type;
        } else {
            item.type = '';
        }
    }
}