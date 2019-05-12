import { combineReducers } from 'redux';
import categoryReducer from '../application/jokes/reducer/categoryReducer';
import jokeReducer from '../application/jokes/reducer/jokesReducer';


const rootReducer = combineReducers({
    categories: categoryReducer,
    joke: jokeReducer,
})

export default rootReducer;
