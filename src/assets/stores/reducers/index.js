import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";
import usersReducer from "./users";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  users: usersReducer
});

export default rootReducers;
