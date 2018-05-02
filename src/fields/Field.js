export default class Field {
    constructor(tag, value) {
        this.tag = tag >> 0;
        this.value = value;
        this.name = null;
        this.description = null;
        this.type = null;
        this.category = null;
        this.section = null;
        this.enumeration = null;
    }

    setTag(tag) {
        this.tag = tag >> 0;
    }

    setValue(value) {
        this.value = value;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setType(type) {
        this.type = type;
    }

    setCategory(category) {
        this.category = category;
    }

    setSection(section) {
        this.section = section;
    }

    setEnumeration(enumeration) {
        this.enumeration = enumeration;
    }

    toString() {
        return `${this.tag}=${this.value}`;
    }
}
