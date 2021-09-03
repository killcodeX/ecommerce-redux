import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGNUP_REQUEST,
  VERIFY_LOCAL_STORAGE,
} from "../actions/actionConstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  isAuthenticated: loadState("ShopLoggedIn") || false ,
  user: {},
  token:""
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      saveState("ShopLoggedIn", true);
      saveState("ShopUser", action.user);
      saveState("ShopToken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token
      }
    case SIGNUP_REQUEST:
      saveState("ShopLoggedIn", true);
      saveState("ShopUser", action.user);
      saveState("ShopToken", action.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        token: action.token
      }
    case LOGOUT_REQUEST:
      saveState("ShopLoggedIn", false);
      saveState("ShopUser", {});
      saveState("ShopToken", "");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        token: ""
      };
    case VERIFY_LOCAL_STORAGE:
       const auth = loadState("ShopLoggedIn")
       const user = loadState("ShopUser")
      const token = loadState("ShopToken")
      return {
        ...state,
        isAuthenticated: auth,
        user: user,
        token: token
      };

    default:
      return state;
  }
};

export default AuthReducer;
