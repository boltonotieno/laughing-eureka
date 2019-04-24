import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCategories } from "./api"
import { LOAD_CATEGORIES, loadCategoriesSuccessful, loadCategoriesFailed } from "./actions"


// Worker saga
function* handleCategoriesLoad() {
    try {
        const categories = yield call(fetchCategories)
        yield put(loadCategoriesSuccessful(categories))
    } catch (error) {
        yield put(loadCategoriesFailed(error.toString()))
    }
}

// Watcher Saga
export default function* watchCategoriesLoad() {
    yield takeLatest(LOAD_CATEGORIES, handleCategoriesLoad)
}
