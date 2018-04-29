export class FieldType {
    constructor() {
        this.reset();
    }

    reset() {
        this.name = null;
        this.baseType = null;
        this.description = null;
        this.xml = {};
        this.added = null;
    }

    setType(type) {
        this.name = type.Name;
        this.baseType = type.BaseType;
        this.description = type.Description;
        this.xml = type.XML ? {
            builtIn: type.XML.BuiltIn,
            base: type.XML.Base,
            description: type.XML.Description
        } : null;
        this.added = type.added;
    }
}
