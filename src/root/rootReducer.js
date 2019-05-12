import { combineReducers } from 'redux';
import categoryReducer from '../application/jokes/reducer/categoryReducer';
import jokeReducer from '../application/jokes/reducer/jokesReducer';
import searchReducer from '../application/jokes/reducer/searchReducer';



const rootReducer = combineReducers({
    categories: categoryReducer,
    joke: jokeReducer,
    searchResult: searchReducer,
})

export default rootReducer;
