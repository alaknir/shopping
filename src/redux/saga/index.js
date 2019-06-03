import { all } from "redux-saga/effects";

import { getProductData } from "./product.saga";

export default function* rootSaga() {
  yield all([getProductData()]);
}
