import { LOAD_JOKE, LOAD_JOKE_SUCCESS, LOAD_JOKE_FAIL } from "../actions/jokesActions";

const initialState = {
    joke: [],
    error: "",
    loading: false,

}

const jokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_JOKE:
            return {
                ...state,
                loading: true,
                error: "",
            }
        case LOAD_JOKE_SUCCESS:
            return {
                ...state,
                joke: action.joke,
                loading: false,
                error: ""
            }
        case LOAD_JOKE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
};

export default jokeReducer;
