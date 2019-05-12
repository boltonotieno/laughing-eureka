import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCategories, fetchCategoryJoke } from "../../api"
import { LOAD_CATEGORIES, loadCategoriesSuccessful, loadCategoriesFailed } from "./actions/categoryActions"
import { LOAD_JOKE, loadJokeSuccessful, loadJokeFailed } from "./actions/jokesActions"


// Category Worker saga
function* handleCategoriesLoad() {
    try {
        const categories = yield call(fetchCategories)
        yield put(loadCategoriesSuccessful(categories))
    } catch (error) {
        yield put(loadCategoriesFailed(error.toString()))
    }
}

// Category Watcher Saga
export function* watchCategoriesLoad() {
    yield takeLatest(LOAD_CATEGORIES, handleCategoriesLoad)
}


// Joke Worker saga
function* handleRandomCategoryLoad(action) {
    try {
        const joke = yield call(fetchCategoryJoke, action.category)
        yield put(loadJokeSuccessful(joke))
    } catch (error) {
        yield put(loadJokeFailed(error.toString()))
    }
}

// Joke Watcher Saga
export function* watchRandomCategoryLoad() {
    yield takeLatest(LOAD_JOKE, handleRandomCategoryLoad)
}
