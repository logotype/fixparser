import {categories} from './../../spec/SpecCategories';

export class Categories {
    constructor() {
        this.categories = categories;
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