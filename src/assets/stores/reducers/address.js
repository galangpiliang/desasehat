import {
  GET_ADDRESS,
  GET_ADDRESS_DISTRICT,
  GET_ADDRESS_SUB_DISTRICT,
  GET_ADDRESS_VILLAGE
} from "../actions/types";

const initialState = {
  provinces: [],
  districts: [],
  subDistricts: [],
  village: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS:
      return {
        ...state,
        provinces: action.payload
      };
    case GET_ADDRESS_DISTRICT:
      return {
        ...state,
        districts: action.payload
      };
    case GET_ADDRESS_SUB_DISTRICT:
      return {
        ...state,
        subDistricts: action.payload
      };
    case GET_ADDRESS_VILLAGE:
      return {
        ...state,
        village: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
