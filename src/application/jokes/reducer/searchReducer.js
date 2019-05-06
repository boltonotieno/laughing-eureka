import { LOAD_SEARCH, LOAD_SEARCH_SUCCESS, LOAD_SEARCH_FAIL } from "../actions/searchActions";

const initialState = {
    jokes: [],
    error: "",
    loading: false,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH:
            return {
                ...state,
                loading: true,
                error: "",
            }
        case LOAD_SEARCH_SUCCESS:
            return {
                ...state,
                jokes: action.searchResult,
                loading: false,
                error: ""
            }
        case LOAD_SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default searchReducer;
