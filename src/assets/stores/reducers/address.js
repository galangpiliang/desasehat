import { GET_ADDRESS } from "../actions/types";

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
        data: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
