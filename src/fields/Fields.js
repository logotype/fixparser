import { FIELDS } from './../spec/SpecFields';
import { Messages } from './../messages/Messages';
import { Categories } from './categories/Categories';
import { DataTypes } from './datatypes/Datatypes';

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

    processField(message, item) {
        const data = this.cacheMap.get(item.tag);
        if(data) {

            if(item.tag === 35) {
                this.messages.processMessage(message, item);
            }

            item.setName(data.Name);
            item.setDescription(data.Description);

            if(data.BaseCategory) {
                this.categories.processCategory(item, data.BaseCategory);
            }

            this.dataTypes.processDatatype(item, data.Type);
        } else {
            item.setType('');
            item.setValue(String(item.value));
        }
    }
}
