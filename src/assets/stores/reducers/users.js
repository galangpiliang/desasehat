import {
  GET_USERS,
  DELETE_USERS,
  ROLE_USERS,
  ADD_USERS
} from "../actions/types";

const initialState = {
  data: [],
  details: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: action.payload
      };
    case ADD_USERS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case DELETE_USERS:
      return {
        ...state,
        data: state.data.filter(i => i._id !== action.payload)
      };
    case ROLE_USERS:
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

export default userReducer;
