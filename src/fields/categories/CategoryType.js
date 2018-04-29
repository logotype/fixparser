export class CategoryType {
    reset() {
        this.categoryID = null;
        this.fixmlFileName = null;
        this.notReqXML = null;
        this.generateImplFile = null;
        this.componentType = null;
        this.sectionID = null;
        this.volume = null;
        this.includeFile = null;
    }

    setCategory(category) {
        this.categoryID = category.CategoryID;
        this.fixmlFileName = category.FIXMLFileName;
        this.notReqXML = category.NotReqXML;
        this.generateImplFile = category.GenerateImplFile;
        this.componentType = category.ComponentType;
        this.sectionID = category.SectionID;
        this.volume = category.Volume;
        this.includeFile = category.IncludeFile;
    }
}
