export class EnumType {
    setEnumeration(enumType) {
        this.tag = enumType.Tag;
        this.value = enumType.Value;
        this.symbolicName = enumType.SymbolicName ? enumType.SymbolicName : null;
        this.group = enumType.Group ? enumType.Group : null;
        this.sort = enumType.Sort ? enumType.Sort : null;
        this.description = enumType.Description ? enumType.Description : null;
        this.elaboration = enumType.Elaboration ? enumType.Elaboration : null;
        this.added = enumType.Added ? enumType.Added : null;
    }
}
