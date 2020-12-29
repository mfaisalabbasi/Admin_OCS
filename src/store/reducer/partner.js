import {
  LOADING_PARTNER,
  PARTNER_SUCCESS,
  PARTNER_FAILED,
  PARTNER_UPDATE,
  FILTERD_PARTNER,
} from "../constant";

const initialState = {
  loading: false,
  partners: null,
  partner: null,
  filters: null,
  error: null,
};

const partner = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING_PARTNER:
      return {
        ...state,
        loading: true,
      };
    case PARTNER_SUCCESS:
      return {
        ...state,
        loading: false,
        partners: payload,
      };
    case FILTERD_PARTNER:
      return {
        ...state,
        loading: false,
        filters: payload,
      };
    case PARTNER_UPDATE:
      return {
        ...state,
        loading: false,
        partner: payload,
      };
    case PARTNER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default partner;
