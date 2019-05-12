import { all } from 'redux-saga/effects';
import { watchCategoriesLoad, watchRandomCategoryLoad } from "../application/jokes/saga";

function* rootSaga() {
    yield all([ watchCategoriesLoad(), watchRandomCategoryLoad() ])
  }

  export default rootSaga;
