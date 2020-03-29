import {
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  VERIFY_CAMPAIGN
} from "../actions/types";

const initialState = {
  data: [],
  details: {}
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPAIGN:
      return {
        ...state,
        data: action.payload
      };
    case DELETE_CAMPAIGN:
      return {
        ...state,
        data: state.data.filter(i => i._id !== action.payload)
      };
    case VERIFY_CAMPAIGN:
      return {
        ...state,
        data: [
          ...state.data.map(obj =>
            obj._id === action.payload._id
              ? (obj = { ...obj, ...action.payload })
              : obj
          )
        ]
      };
    default:
      return state;
  }
};

export default campaignReducer;
