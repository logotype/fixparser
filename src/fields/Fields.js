import { FIELDS } from './../spec/SpecFields';
import { Messages } from './../messages/Messages';
import { Categories } from './categories/Categories';
import { DataTypes } from './datatypes/Datatypes';
import { Sections } from './sections/Sections';

export class Fields {
    constructor() {
        this.fields = FIELDS;
        this.cacheMap = new Map();
        this.fields.forEach((item) => {
            this.cacheMap.set(item.Tag >> 0, item);
        });
        this.messages = new Messages();
        this.categories = new Categories();
        this.sections = new Sections();
        this.dataTypes = new DataTypes();
        this.dataTypes = new DataTypes();
    }

    getField(field) {
        const data = this.cacheMap.get(field.tag);
        if(data) {

            field.setName(data.Name);
            field.setDescription(data.Description);

            if(data.BaseCategory) {
                this.categories.processCategory(field, data.BaseCategory);

                if(field.category.sectionID) {
                    this.sections.processSection(field, field.category.sectionID);
                }
            }

            this.dataTypes.processDatatype(field, data.Type);
        } else {
            field.setType('');
            field.setValue(String(field.value));
        }
    }

    processField(message, field) {
        const data = this.cacheMap.get(field.tag);
        if(data) {

            if(field.tag === 35) {
                this.messages.processMessage(message, field);
            }

            field.setName(data.Name);
            field.setDescription(data.Description);

            if(data.BaseCategory) {
                this.categories.processCategory(field, data.BaseCategory);

                if(field.category.sectionID) {
                    this.sections.processSection(field, field.category.sectionID);
                }
            }

            this.dataTypes.processDatatype(field, data.Type);
        } else {
            field.setType('');
            field.setValue(String(field.value));
        }
    }
}
