import {SpecCategories} from './../../spec/SpecCategories';

export class Categories {
    constructor() {
        this.specCategories = new SpecCategories();
        this.categories = this.specCategories.categories;
    }

    find(category) {
        return this.categories.find(spec => spec.CategoryID === category);
    }

    process(item, baseCategory) {
        let categoryData = this.find(baseCategory);
        if(categoryData) {
            item.category = categoryData;
        }
    }
}