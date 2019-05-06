import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCategories, fetchCategoryJoke, searchJokes } from "../../api"
import { LOAD_CATEGORIES, loadCategoriesSuccessful, loadCategoriesFailed } from "./actions/categoryActions"
import { LOAD_JOKE, loadJokeSuccessful, loadJokeFailed } from "./actions/jokesActions"
import { LOAD_SEARCH, loadSearchSuccessful, loadSearchFailed } from "./actions/searchActions"


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

// Search Worker saga
function* handleSearchLoad(action) {
    try {
        const jokes = yield call(searchJokes, action.query)
        yield put(loadSearchSuccessful(jokes))
    } catch (error) {
        yield put(loadSearchFailed(error.toString()))
    }
}

// Search Watcher Saga
export function* watchSearchLoad() {
    yield takeLatest(LOAD_SEARCH, handleSearchLoad)
}
