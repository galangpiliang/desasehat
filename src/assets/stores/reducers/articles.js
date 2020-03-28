import { GET_ARTICLES, DELETE_ARTICLES } from "../actions/types";

const initialState = {
  data: [],
  details: {}
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        data: action.payload
      };
    case DELETE_ARTICLES:
      return {
        ...state,
        data: state.data.filter(i => i._id !== action.payload)
      };
    default:
      return state;
  }
};

export default campaignReducer;
