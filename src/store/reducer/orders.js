import {
  LOADING_ORDERS,
  SUCCESS_ORDERS,
  FAILED_ORDERS,
  LOADING_NEAREST_PARTNERS,
  FAILED_NEAREST_PARTNERS,
  SUCCESS_NEAREST_PARTNERS,
} from "../constant";

const initialState = {
  loading: false,
  orders: null,
  order: null,
  nearestpartners: null,
  error: null,
};

const orders = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_ORDERS:
    case LOADING_NEAREST_PARTNERS:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS_ORDERS:
      return {
        ...state,
        loading: false,
        orders: payload,
      };
    case SUCCESS_NEAREST_PARTNERS:
      return {
        ...state,
        loading: false,
        nearestpartners: payload,
      };
    case FAILED_ORDERS:
    case FAILED_NEAREST_PARTNERS:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default orders;
