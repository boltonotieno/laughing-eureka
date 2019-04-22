import { createStore, compose } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            composeWithDevTools()
        ),
    );
    return store;
}

export default configureStore;
