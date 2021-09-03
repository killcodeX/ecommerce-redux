import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  SIGNUP_REQUEST,
  VERIFY_LOCAL_STORAGE,
} from "./actionConstant";

//   actions

// for login

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const requestLogin = (body) => {
  console.log(body)
  return {
    type: LOGIN_REQUEST,
  };
};


// for sign up

export const requestSignUp = (body) => {
  console.log(body)
  return {
    type: SIGNUP_REQUEST,
  };
};



//  for log out
export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

