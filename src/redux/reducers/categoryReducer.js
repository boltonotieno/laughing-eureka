import { JOKES_CATEGORY } from "../../constants";

const initialState = {
    loading: false,
    categories: [],
    error: null
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOKES_CATEGORY.LOAD:
            return {
                ...state,
                loading: true
            }
        case JOKES_CATEGORY.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.categories
            }
        case JOKES_CATEGORY.LOAD_FAIL:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
};

export default categoryReducer;
