import * as actionTypes from "../action-types";

const initialState = {
  isFetching: false,
  isError: false,
  data: [],
  error: null
};

const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_DATA_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.PRODUCTS_DATA_RESPONSE:
      return {
        ...initialState,
        data: action.payload
      };
    case actionTypes.PRODUCTS_DATA_ERROR:
      return {
        ...initialState,
        isError: true,
        error: action.payload
      };
    default:
      return initialState;
  }
};

export default productReducer;
