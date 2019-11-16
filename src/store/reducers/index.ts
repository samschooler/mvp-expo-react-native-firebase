import { combineReducers } from "redux";

import auth from "store/reducers/auth";
import user from "store/reducers/user";
import login from "store/reducers/login";
import registration from "store/reducers/registration";

export default combineReducers({
  auth,
  user,
  login,
  registration
});
