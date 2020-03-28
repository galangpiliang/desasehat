import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";
import usersReducer from "./users";
import addressReducer from "./address";
import dashboardReducer from "./dashboard";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  users: usersReducer,
  address: addressReducer,
  dashboard: dashboardReducer
});

export default rootReducers;
