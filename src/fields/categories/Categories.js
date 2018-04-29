import { CATEGORIES } from './../../spec/SpecCategories';
import { CategoryType } from './CategoryType';

export class Categories {
    constructor() {
        this.categories = CATEGORIES;
        this.cacheMap = new Map();
        this.categories.forEach((category) => {
            this.cacheMap.set(category.CategoryID, category);
        });
        this.categoryType = new CategoryType();
    }

    processCategory(field, baseCategory) {
        this.categoryType.reset();
        const categoryData = this.cacheMap.get(String(baseCategory));
        if(categoryData) {
            this.categoryType.setCategory(categoryData);
            field.setCategory(this.categoryType);
        }
    }
}
