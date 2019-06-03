import * as actionTypes from "../action-types";

export const productDataRequest = () => ({
  type: actionTypes.PRODUCTS_DATA_REQUEST
});

export const productDataResponse = data => ({
  type: actionTypes.PRODUCTS_DATA_RESPONSE,
  payload: data
});

export const productDataError = error => ({
  type: actionTypes.PRODUCTS_DATA_ERROR,
  payload: error
});
