import JOKES_CATEGORY from '../constants';

const loadCategory = () => ({
    type: JOKES_CATEGORY.LOAD,
})

const setCategory = categories => ({
    type: JOKES_CATEGORY.LOAD_SUCCESS,
    categories,
})

const setError = error => ({
    type: JOKES_CATEGORY.LOAD_FAIL,
    error,
})

export { loadCategory, setCategory, setError };
