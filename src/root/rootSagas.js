import { all } from 'redux-saga/effects';
import { watchCategoriesLoad, watchRandomCategoryLoad, watchSearchLoad } from "../application/jokes/saga";

function* rootSaga() {
  yield all([watchCategoriesLoad(), watchRandomCategoryLoad(), watchSearchLoad()])
}

export default rootSaga;
