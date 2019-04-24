import { all } from 'redux-saga/effects';
import watchCategoriesLoad from "../application/jokes/saga";

function* rootSaga() {
    yield all([ watchCategoriesLoad() ])
  }

  export default rootSaga;