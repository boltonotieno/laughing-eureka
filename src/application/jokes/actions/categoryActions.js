const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
const LOAD_CATEGORIES_FAIL = 'LOAD_CATEGORIES_FAIL';

const loadCategories = () => ({
    type: LOAD_CATEGORIES,
})

const loadCategoriesSuccessful = categories => ({
    type: LOAD_CATEGORIES_SUCCESS,
    categories,
})

const loadCategoriesFailed = error => ({
    type: LOAD_CATEGORIES_FAIL,
    error,
})

export { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAIL, loadCategories, loadCategoriesSuccessful, loadCategoriesFailed };
