import { CATEGORIES } from './../../spec/SpecCategories';

export class Categories {
    constructor() {
        this.categories = CATEGORIES;
        this.cacheMap = new Map();
        this.categories.forEach((item) => {
            this.cacheMap.set(item.CategoryID, item);
        });
    }

    processCategory(item, baseCategory) {
        const categoryData = this.cacheMap.get(String(baseCategory));
        if(categoryData) {
            item.setCategory(categoryData);
        }
    }
}
