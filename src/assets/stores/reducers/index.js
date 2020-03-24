import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";
import usersReducer from "./users";
import addressReducer from "./address";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  users: usersReducer,
  address: addressReducer
});

export default rootReducers;
