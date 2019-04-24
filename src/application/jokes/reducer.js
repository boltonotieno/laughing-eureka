import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAIL } from "./actions";

const initialState = {
    loading: false,
    categories: [],
    error: ""
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.categories
            }
        case LOAD_CATEGORIES_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return state;
    }
};

export default categoryReducer;
