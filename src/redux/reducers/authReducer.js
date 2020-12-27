import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from "../actions/actionConstant";

const initialState = {
  isLoggingIn: false,
  isSignUp: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  SignUpError: false,
  logoutError: false,
  isAuthenticated: false,
  user: {},
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };

      case SIGNUP_REQUEST:
      return {
        ...state,
        isSignUp: true,
        SignUpError: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUp: false,
        isAuthenticated: true,
        user: action.user,
      };
    case  SIGNUP_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        SignUpError: true,
      };
      case LOGOUT_REQUEST:
        return {
          ...state,
          isLoggingOut: true,
          loginError: false,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isLoggingOut: false,
          isAuthenticated: false,
          user: {},
        };
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          isAuthenticated: false,
          loginError: true,
        };

    default:
      return state;
  }
};

export default AuthReducer;
