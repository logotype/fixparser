export class FieldType {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = null;
        this.baseType = null;
        this.description = null;
        this.added = null;
    }

    setType(type) {
        this.name = type.Name;
        this.baseType = type.BaseType;
        this.description = type.Description;
        this.added = type.added;
    }
}
