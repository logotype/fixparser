export class SectionType {
    reset() {
        this.sectionID = null;
        this.name = null;
        this.displayOrder = null;
        this.volume = null;
        this.notReqXML = null;
        this.fixmlFileName = null;
        this.description = null;
    }

    setSection(section) {
        this.sectionID = section.SectionID;
        this.name = section.Name;
        this.displayOrder = section.DisplayOrder;
        this.volume = section.Volume;
        this.notReqXML = section.NotReqXML;
        this.fixmlFileName = section.FIXMLFileName;
        this.description = section.Description;
    }
}
