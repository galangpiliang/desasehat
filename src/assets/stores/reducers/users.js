import { GET_USERS } from "../actions/types";

const authReducer = (state = false, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
