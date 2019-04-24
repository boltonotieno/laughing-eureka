import { createStore, compose } from "redux";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
    return createStore(
        rootReducer,
        compose(
            composeWithDevTools()
        ),
    );
}

export default configureStore;
