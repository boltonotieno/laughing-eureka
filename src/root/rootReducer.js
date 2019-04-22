import { combineReducers } from 'redux';
import categoryReducer from '../application/jokes/reducer';

const rootReducer = combineReducers({
    categories: categoryReducer,
})

export default rootReducer;
