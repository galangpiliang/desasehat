import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";
import movieReducer from "./movie";
import searchReducer from "./search";
import usersReducer from "./users";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  search: searchReducer,
  movie: movieReducer,
  users: usersReducer
});

export default rootReducers;
