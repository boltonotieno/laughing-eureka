import { createStore, compose, applyMiddleware, } from "redux";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSagas";

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            composeWithDevTools(),
        ),
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;
