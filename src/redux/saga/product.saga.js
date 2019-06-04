import { call, put } from "redux-saga/effects";

import { getProducts } from "../../api";
import * as actions from "../actions";

const replaceSpace = (str = "", replaceChar = "_") =>
  str.replace(/[ \/]/g, replaceChar);

const normalizeproductsData = products =>
  products.map(product => ({
    id: `${replaceSpace(product.productName)}_${product.index}`,
    ...product
  }));

export function* getProductData() {
  yield put(actions.productDataRequest());
  const response = yield call(getProducts);
  if (response.status === 200) {
    yield put(
      actions.productDataResponse(normalizeproductsData(response.data))
    );
  } else {
    yield put(actions.productDataError(response));
  }
}
